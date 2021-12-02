import React from 'react'
import Layout from 'components/Layout'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SubscribeCfps from 'components/SubscribeCfps'
import Meta from 'components/Meta'
import { withAuthentication } from '../../context/withAuthentication'
import Conference from 'components/Conference'
import { flattenGraphqlConference } from '../../utilities/flatten-graph-ql-conference'
import SimilarConferences from 'components/SimilarConferences'
import { withAbstracts } from '../../context/withAbstracts'

export default withAuthentication(
  withAbstracts(({ data, location, auth, pageContext, abstracts }) => {
    const conference = flattenGraphqlConference(
      get(data, 'conferences.edges.0')
    )
    const title = conference.name

    return (
      <Layout location={location} auth={auth}>
        <Meta site={get(data, 'site.meta')} title={title} />
        <div className="container mt-5 mb-3">
          <Conference
            abstracts={abstracts}
            data={conference}
            auth={auth}
            single={true}
            hideButtons={true}
          />
          <SimilarConferences
            data={conference}
            similar={pageContext.relatedRecords}
            auth={auth}
          />
          <SubscribeCfps />
        </div>
      </Layout>
    )
  })
)

export const pageQuery = graphql`
  query($recordId: String!) {
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
    conferences: allAirtable(
      filter: {
        table: { eq: "conferences" }
        data: { record_id: { eq: $recordId } }
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
            city
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
