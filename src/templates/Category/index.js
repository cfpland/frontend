import React from 'react'
import Layout from 'components/Layout'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import ConferenceList from 'components/ConferenceList'
import SubscribeCfps from 'components/SubscribeCfps'
import Meta from 'components/Meta'

export default ({ data }) => {
  const category = get(data, 'category.edges[0].node.data')
  const allConferences = get(data, 'conferences.edges')
  const title = 'Upcoming ' + category.name + ' Conference CFPs'
  const description = category.description

  return (
    <Layout location="/conferences">
      <Meta site={get(data, 'site.meta')} title={title} />
      <ConferenceList
        conferences={allConferences}
        title={title}
        follow={false}
        description={description}
      />
      <div className="container">
        {allConferences && allConferences.length > 0 ? (
          <SubscribeCfps />
        ) : (
          <div className="mt-5 mb-5">
            <p>
              It looks like we don't know of any open CFPs for this category
              right now.
            </p>
            <p>
              If you know of one that we should include, you can let others know
              about it by submitting it.
            </p>
            <p className="text-center">
              <a href="/submit" className="btn btn-info btn-lg">
                Submit One
              </a>
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
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
    category: allAirtable(filter: { fields: { slug: { eq: $slug } } }) {
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
    conferences: allAirtable(
      filter: {
        data: { category: { elemMatch: { fields: { slug: { eq: $slug } } } } }
      }
    ) {
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
