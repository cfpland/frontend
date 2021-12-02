import { graphql, Link } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Jumbotron from 'components/Jumbotron'
import SubscribeCfps from 'components/SubscribeCfps'
import ConferenceListHeader from 'components/ConferenceListHeader'
import ConferenceList from 'components/ConferenceList'
import { flattenGraphqlConference } from '../utilities/flatten-graph-ql-conference'
import { withAuthentication } from '../context/withAuthentication'

class Index extends React.Component {
  render = () => {
    const { data, location, auth } = this.props
    const maxConferences = 10
    const posts = get(data, 'remark.posts')
    const guides = get(data, 'guides.all')
    const allConferences = get(data, 'conferences.edges').map(
      flattenGraphqlConference
    )
    const conferences = allConferences.slice(0, maxConferences)
    const remaining = allConferences.length - conferences.length

    return (
      <Layout location={location} auth={auth}>
        <Meta
          site={get(data, 'site.meta')}
          title="Upcoming Calls for Proposals, Tech Conferences, and Speaking Opportunities"
        />
        <Jumbotron />

        <div id="cfps" className="container mt-1 mt-md-5">
          <ConferenceListHeader follow={true} definition={true} />
          <ConferenceList
            conferences={conferences}
            hideButtons={true}
            auth={auth}
          />
          <div className="mt-3 mb-3 text-right">
            <Link to="/conferences/" className="text-black-50">
              See more upcoming CFPs →
            </Link>
          </div>
          <SubscribeCfps remaining={remaining} />
        </div>

        <div id="guides" className="container mt-5 mb-4">
          <h2>Guides for Technology Conference Speakers</h2>
          {guides.map(({ guide }, i) => (
            <Post
              data={guide}
              options={{
                isIndex: true,
              }}
              key={i}
            />
          ))}
        </div>

        <div id="blog" className="container mt-5">
          <h2>Latest Blog Posts</h2>
          {posts.map(({ post }, i) => (
            <Post
              data={post}
              options={{
                isIndex: true,
              }}
              key={i}
            />
          ))}
          <div className="mb-4 text-right">
            <Link to="/blog/" className="text-black-50">
              Read More on Our Blog →
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Index)

export const pageQuery = graphql`
  query($greaterThanDate: Date!, $lessThanDate: Date!) {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        image
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: { frontmatter: { category: { ne: "Guides" } } }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            date(formatString: "YYYY/MM/DD")
            image
          }
        }
      }
    }
    guides: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { path: { eq: "/guides/speaking/" } } }
    ) {
      all: edges {
        guide: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            date(formatString: "YYYY/MM/DD")
            image
          }
        }
      }
    }
    conferences: allAirtable(
      filter: {
        table: { eq: "conferences" }
        data: { cfp_due_date: { gte: $greaterThanDate, lte: $lessThanDate } }
      }
    ) {
      edges {
        node {
          data {
            name
            cfp_url
            cfp_due_date
            icon {
              url
            }
            location
            city
            country
            category {
              data {
                name
              }
            }
            is_new
            event_start_date
            perks_checked
            travel_covered
            hotel_covered
            stipend_covered
            record_id
          }
        }
      }
    }
  }
`
