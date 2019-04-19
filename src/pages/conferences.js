import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import ConferenceList from 'components/ConferenceList'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import SubscribeCfps from 'components/SubscribeCfps'
import { Link } from '@reach/router'

const allRegions = [
  {
    name: 'Northern America',
    slug: 'north-america',
  },
  {
    name: 'Southern America',
    slug: 'south-america',
  },
]

const perks = [
  {
    name: '✈️ Travel',
    slug: 'travel',
  },
  {
    name: '🏨 Hotel',
    slug: 'hotel',
  },
  {
    name: '💵 Stipend',
    slug: 'stipend',
  },
]

class Conferences extends React.Component {
  render() {
    const { location, data } = this.props
    const allCategories = get(data, 'category.edges')
    const allConferences = get(data, 'conferences.edges')
    const title = 'Upcoming Conference CFPs'
    const description =
      'All technology conference CFPs closing in the next 30 days.'

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title={title} />
        <div className="container mt-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Filters:
              </a>
            </li>
            <li className="nav-item">
              <Link to="/conferences" className="nav-link active">
                All
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
              <div className="dropdown-menu">
                {allCategories.map((category, i) => (
                  <Link
                    key={i}
                    to={'/conferences/' + category.node.data.name.toLowerCase()}
                    className="dropdown-item"
                  >
                    {category.node.data.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Regions
              </a>
              <div className="dropdown-menu">
                {allRegions.map((region, i) => (
                  <Link
                    key={i}
                    to={'/regions/' + region.slug}
                    className="dropdown-item"
                  >
                    {region.name}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <ConferenceList
          conferences={allConferences}
          title={title}
          follow={true}
          description={description}
        />
        <div className="container mt-3">
          <SubscribeCfps />
        </div>
      </Layout>
    )
  }
}

export default Conferences

export const pageQuery = graphql`
  query CfpsQuery {
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
    conferences: allAirtable(filter: { table: { eq: "conferences" } }) {
      edges {
        node {
          id
          data {
            name
            event_url
            location
            event_start_date
            cfp_due_date
            cfp_url
            event_end_date
            twitter
            perks_checked
            region
            subregion
            icon {
              url
            }
            country
            created_date
            created_days_back
            cfp_days_until
            is_new
            description
            travel_covered
            hotel_covered
            stipend_covered
            record_id
            category {
              id
              data {
                name
                description
              }
              fields {
                slug
              }
            }
          }
        }
      }
    }
  }
`
