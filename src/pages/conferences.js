import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import ConferenceListHeader from 'components/ConferenceListHeader'
import LoadMoreConferences from 'components/LoadMoreConferences'
import ConferenceList from '../components/ConferenceList'
import AppContext from 'context/AppContext'
import ConferenceListNav from '../components/ConferenceListNav'
import queryString from 'query-string'
import SaveSearch from '../components/SaveSearch'
import SubmitCfpCta from '../components/SubmitCfpCta'
import ApiClient from '../utilities/api-client'
import { flattenGraphqlConference } from '../utilities/flatten-graph-ql-conference'
import { regions } from '../utilities/regions'

const queryOptionsSet = query => {
  return query && (query.category || query.region)
}

class Conferences extends React.Component {
  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      allConferences: null,
      savedConferences: null,
    }
    this.apiClient = new ApiClient()
  }

  componentDidMount = () => {
    this._isMounted = true

    if (this.apiClient.isAuthenticated) {
      this.getAllConferences()
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render = () => {
    const { location, data } = this.props

    this.query = queryString.parse(location.search)

    const categories = get(data, 'category.edges')
    const conferences =
      this.state.allConferences ||
      get(data, 'conferences.edges').map(flattenGraphqlConference)
    const title = 'Upcoming Conference CFPs'
    const description = 'All technology conference CFPs closing soon.'

    return (
      <AppContext.Consumer>
        {context => (
          <Layout location={location}>
            <Meta site={siteMetadata} title={title} />
            <div id="cfps" className="container mt-2 mt-md-5">
              <ConferenceListHeader
                title={title}
                description={description}
                follow={true}
              />
              <ConferenceListNav
                location={location}
                categories={categories}
                regions={regions}
              />
              {queryOptionsSet(this.query) ? <SaveSearch /> : ''}
              <ConferenceList
                conferences={this.filterConferences(
                  conferences,
                  regions,
                  categories
                )}
              />
            </div>
            <div className="container mt-2">
              {context.authToken ? <SubmitCfpCta /> : <LoadMoreConferences />}
            </div>
          </Layout>
        )}
      </AppContext.Consumer>
    )
  }

  filterConferences(conferences, regions, categories) {
    if (this.query) {
      const selectedRegion = regions.find(
        region => this.query.region && region.slug === this.query.region
      )
      if (selectedRegion) {
        conferences = conferences.filter(
          conference => conference.region === selectedRegion.name
        )
      }

      const selectedCategory = categories.find(
        category =>
          this.query.category &&
          category.node.data.name.toLowerCase() === this.query.category
      )
      if (selectedCategory) {
        conferences = conferences.filter(
          conference =>
            conference.category &&
            conference.category === selectedCategory.node.data.name
        )
      }
    }

    return conferences
  }

  getAllConferences = () => {
    Promise.all([
      this.apiClient.getConferences(),
      this.apiClient.getSavedConferences(),
    ])
      .then(([all, saved]) => {
        this.populateList(all, saved)
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  populateList = (all, savedConferences) => {
    if (this._isMounted) {
      const allConferences = all.data.items
        .map(conf => {
          conf.isSaved = !!savedConferences.data.items.find(
            savedConf =>
              savedConf.atConferenceId === conf.providerId &&
              savedConf.action === 'saved'
          )
          conf.isHidden = !!savedConferences.data.items.find(
            savedConf =>
              savedConf.atConferenceId === conf.providerId &&
              savedConf.action === 'hidden'
          )

          const trackedUserConf = savedConferences.data.items.find(
            savedConf =>
              savedConf.atConferenceId === conf.providerId &&
              savedConf.action === 'tracked'
          )
          if (trackedUserConf) {
            conf.isTracked = true
            conf.trackingStatus = trackedUserConf.meta.trackingStatus
          }

          return conf
        })
        .filter(c => !c.isHidden)

      this.setState({
        ...this.state,
        allConferences,
        savedConferences,
      })
    }
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
