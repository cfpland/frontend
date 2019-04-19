import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import SubscribeCfps from 'components/SubscribeCfps'
import ConferenceListHeader from 'components/ConferenceListHeader'
import ConferenceList from 'components/ConferenceList'
import ConferenceListNav from 'components/ConferenceListNav'

const allRegions = [
  {
    name: 'Africa',
    slug: 'africa',
  },
  {
    name: 'Americas',
    slug: 'americas',
  },
  {
    name: 'Asia',
    slug: 'asia',
  },
  {
    name: 'Europe',
    slug: 'europe',
  },
  {
    name: 'Oceania',
    slug: 'oceania',
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
        <div id="cfps" className="container mt-5">
          <ConferenceListHeader
            title={title}
            description={description}
            follow={true}
          />
          <ConferenceListNav
            location={location}
            categories={allCategories}
            regions={allRegions}
          />
          <ConferenceList conferences={allConferences} />
        </div>
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
