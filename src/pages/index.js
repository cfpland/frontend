import { graphql, Link } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Jumbotron from 'components/Jumbotron'
import Conference from 'templates/Conference'
import SubscribeCfps from 'components/SubscribeCfps'

const Index = ({ data, location }) => {
  const maxConferences = 10
  const posts = get(data, 'remark.posts')
  const allConferences = get(data, 'conferences.edges')
  const conferences = allConferences.slice(0, maxConferences)
  const remaining = allConferences.length - conferences.length

  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <Jumbotron />
      <div id="cfps" className="container mt-5">
        <h2 className="mb-3">
          Upcoming CFPs
          <a
            className="pull-right text-info"
            target="_blank"
            href="https://twitter.com/cfp_land"
          >
            <span className="fa fa-twitter" />
          </a>
          <a
            className="pull-right mr-2 text-warning"
            target="_blank"
            href="https://feeds.cfpland.com/v2/rss/cfps"
          >
            <span className="fa fa-rss" />
          </a>
        </h2>
        <p className="text-muted">
          A "Call for Proposal" (or "CFP") is an open invitation for speakers to
          apply to a conference. Not sure what to expect? Check out our{' '}
          <Link to="/blog/new-conference-speakers">
            tips for new conference speakers
          </Link>
          .
        </p>
        <ul className="list-group">
          {conferences.map((conference, i) => (
            <Conference data={conference.node.data} key={i} />
          ))}
        </ul>
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
          }
        }
      }
    }
  }
`
