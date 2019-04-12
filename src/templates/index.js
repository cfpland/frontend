import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Page from 'templates/Page'

const Template = ({ data, location }) => (
  <div>
    <Layout location={location}>
      <Meta
        title={get(data, 'post.frontmatter.tfitle')}
        site={get(data, 'site.meta')}
        image={get(data, 'post.frontmatter.image')}
      />
      {get(data, 'post.frontmatter.layout') != 'page' ? (
        <Post
          data={get(data, 'post')}
          options={{
            isIndex: false,
          }}
        />
      ) : (
        <Page {...this.props} />
      )}
    </Layout>
  </div>
)
export default Template

export const pageQuery = graphql`
  query PostByPath($path: String!) {
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
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
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
`
