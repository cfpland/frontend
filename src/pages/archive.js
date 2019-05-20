import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { regions } from '../utilities/regions'

class Archive extends React.Component {
  render() {
    const { location, data } = this.props
    const categories = get(data, 'category.edges')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Conference Archive" />
        <div className="container mt-3">
          <h1>Conference Archive</h1>
          <p className="lead">
            Browse conferences by location, category, and more. Or{' '}
            <Link to="/conferences/">
              click here to view all conferences with CFPs closing soon
            </Link>
            .
          </p>
          <div className="row">
            <div className="col-md-6">
              <h3>Categories</h3>
              <ul>
                {categories.map((category, i) => (
                  <li key={i}>
                    <Link
                      to={`/conferences/${category.node.data.name.toLowerCase()}/`}
                    >
                      {category.node.data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Regions</h3>
              <ul>
                {regions.map((region, i) => (
                  <li key={i}>
                    <Link to={`/regions/${region.slug}/`}>{region.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Archive

export const pageQuery = graphql`
  query ArchiveQuery {
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
    category: allAirtable(filter: { table: { eq: "categories" } }) {
      edges {
        node {
          id
          data {
            name
            description
          }
        }
      }
    }
  }
`
