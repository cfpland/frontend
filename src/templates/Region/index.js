import React from 'react'
import Layout from 'components/Layout'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import ConferenceListHeader from 'components/ConferenceListHeader'
import ConferenceList from 'components/ConferenceList'
import SubscribeCfps from 'components/SubscribeCfps'
import Meta from 'components/Meta'
import { flattenGraphqlConference } from '../../utilities/flatten-graph-ql-conference'
import { withAuthentication } from '../../context/withAuthentication'

const getRegion = (allConferences, location) => {
  let region = 'Unknown'

  if (get(allConferences, '[0].region')) {
    region = get(allConferences, '[0].region')
  } else if (location.pathname.split('/')) {
    region = get(location.pathname.split('/'), '[2]')
    region = region.charAt(0).toUpperCase() + region.slice(1)
  }

  return region
}

export default withAuthentication(({ data, location, auth }) => {
  const allConferences = get(data, 'conferences.edges').map(
    flattenGraphqlConference
  )
  const region = getRegion(allConferences, location)
  const title = region + ' Conference CFPs'
  const description =
    'Upcoming technology conference calls for proposals in the "' +
    region +
    '" region.'

  return (
    <Layout location={location} auth={auth}>
      <Meta site={get(data, 'site.meta')} title={title} />
      <div id="cfps" className="container mt-5 mb-3">
        <ConferenceListHeader
          title={title}
          follow={false}
          description={description}
        />
        <ConferenceList conferences={allConferences} auth={auth} />
      </div>
      <div className="container">
        {allConferences && allConferences.length > 0 ? (
          <SubscribeCfps />
        ) : (
          <div className="mt-5 mb-5">
            <p>
              It looks like we don't know of any open CFPs for this region right
              now.
            </p>
            <p>
              If you know of one that we should include, you can let others know
              about it by submitting it.
            </p>
            <p className="text-center">
              <Link to="/submit/" className="btn btn-info btn-lg">
                Submit One
              </Link>
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
})

export const pageQuery = graphql`
  query($name: String!) {
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
    conferences: allAirtable(filter: { data: { region: { eq: $name } } }) {
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
