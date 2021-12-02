import React from 'react'
import { graphql } from 'gatsby'
import Post from 'templates/Post'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { siteMetadata } from '../../../gatsby-config'
import SubscribeBlog from 'components/SubscribeBlog'
import { withAuthentication } from '../../context/withAuthentication'

const BlogCategory = ({ pageContext, location, data, auth }) => {
  return (
    <Layout location={location} auth={auth}>
      <Meta site={siteMetadata} title={pageContext.category + ' Blog Posts'} />
      <div className="container mt-3">
        <h1>{pageContext.category + ' Blog Posts'}</h1>

        {data.remark.posts.map(({ post }, i) => (
          <Post
            data={post}
            options={{
              isIndex: true,
            }}
            key={i}
          />
        ))}

        <SubscribeBlog auth={auth} />
      </div>
    </Layout>
  )
}
export default withAuthentication(BlogCategory)

export const pageQuery = graphql`
  query BlogQuery($category: String) {
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
