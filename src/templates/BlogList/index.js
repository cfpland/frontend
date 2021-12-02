import React from 'react'
import GatsbyLink from 'gatsby-link'
import Post from 'templates/Post'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { siteMetadata } from '../../../gatsby-config'
import SubscribeBlog from 'components/SubscribeBlog'
import { withAuthentication } from '../../context/withAuthentication'

const BlogList = ({ pageContext, location, data, auth }) => {
  const { group, index, pageCount } = pageContext
  const first = index == 1
  const last = index == pageCount
  const previousUrl = 'blog/' + (index - 1 == 1 ? '/' : index - 1).toString()
  const nextUrl = 'blog/' + (index + 1).toString()

  return (
    <Layout location={location} auth={auth}>
      <Meta site={siteMetadata} title="Tech Conference Speaker's Blog" />
      <div className="container mt-3">
        <SubscribeBlog auth={auth} />
        {group.map(({ post }, i) => (
          <Post
            data={post}
            options={{
              isIndex: true,
            }}
            key={i}
          />
        ))}
        <div className="row mb-3">
          <div className="col">
            {!first ? (
              <GatsbyLink className="btn btn-primary" to={previousUrl}>
                <i className="fa fa-arrow-left" /> Previous Page
              </GatsbyLink>
            ) : (
              ''
            )}
          </div>
          <div className="col text-right">
            {!last ? (
              <GatsbyLink className="btn btn-primary" to={nextUrl}>
                Next Page <i className="fa fa-arrow-right" />
              </GatsbyLink>
            ) : (
              ''
            )}
          </div>
        </div>
        <SubscribeBlog auth={auth} />
      </div>
    </Layout>
  )
}
export default withAuthentication(BlogList)
