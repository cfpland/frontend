import { graphql, Link } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Jumbotron from 'components/Jumbotron'
import SubscribeCfps from 'components/SubscribeCfps'
import ConferenceList from 'components/ConferenceList'

const Index = ({ data, location }) => {
  const maxConferences = 10
  const posts = get(data, 'remark.posts')
  const allConferences = get(data, 'conferences.edges')
  const conferences = allConferences.slice(0, maxConferences)
  const remaining = allConferences.length - conferences.length

  return (
    <Layout location={location}>
      <Meta
        site={get(data, 'site.meta')}
        title="Upcoming Calls for Proposals, Tech Conferences, and Speaking Opportunities"
      />
      <Jumbotron />
      <ConferenceList conferences={conferences} follow={true} />
      <div className="container">
        <SubscribeCfps remaining={remaining} />
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
          <Link to="/blog/" className="text-secondary">
            Read More on Our Blog →
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
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
    conferences: allAirtable(filter: { table: { eq: "conferences" } }) {
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
          }
        }
      }
    }
  }
`
