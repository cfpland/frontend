import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Post from 'templates/Post'
import SubscribeBlog from 'components/SubscribeBlog'
import { withAuthentication } from '../context/withAuthentication'

class Blog extends React.Component {
  render() {
    const { location, data, auth } = this.props
    const posts = get(data, 'remark.posts')

    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title="Tech Conference Speaker's Blog" />
        <div className="container mt-3">
          <SubscribeBlog />
          {posts.map(({ post }, i) => (
            <Post
              data={post}
              options={{
                isIndex: true,
              }}
              key={i}
            />
          ))}
          <SubscribeBlog />
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(Blog)

export const pageQuery = graphql`
  query BlogQuery {
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
  }
`
