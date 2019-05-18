import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import ConferenceListHeader from '../../components/ConferenceListHeader'
import LoadMoreConferences from 'components/LoadMoreConferences'
import ConferenceList from '../../components/ConferenceList'
import AppContext from 'context/AppContext'
import SubmitCfpCta from '../../components/SubmitCfpCta'
import ApiClient from '../../utilities/api-client'
import { flattenGraphqlConference } from '../../utilities/flatten-graph-ql-conference'
import SavedListNav from '../../components/SavedListNav'

class Saved extends React.Component {
  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      conferences: null,
      categories: [],
    }
    this.apiClient = new ApiClient()
  }

  componentDidMount = () => {
    this._isMounted = true

    if (this.apiClient.isAuthenticated) {
      this.apiClient
        .getConferences()
        .then(res => {
          if (
            this._isMounted &&
            res &&
            res.data &&
            res.data.items &&
            res.data.items.length > 0
          ) {
            this.setState({
              ...this.state,
              conferences: res.data.items,
            })
          }
        })
        .catch(error => {
          console.error(error.message)
        })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render = () => {
    const { location, data } = this.props

    const categories = get(data, 'category.edges')
    const conferences =
      this.state.conferences ||
      get(data, 'conferences.edges').map(flattenGraphqlConference)
    const title = 'Your Saved CFPs'

    return (
      <AppContext.Consumer>
        {context => (
          <Layout location={location}>
            <Meta site={siteMetadata} title={title} />
            <div id="cfps" className="container mt-2 mt-md-5">
              <ConferenceListHeader
                title={title}
                follow={false}
                definition={false}
              />
              <SavedListNav location={location} />
              <ConferenceList conferences={conferences} />
            </div>
            <div className="container mt-2">
              {context.authToken ? <SubmitCfpCta /> : <LoadMoreConferences />}
            </div>
          </Layout>
        )}
      </AppContext.Consumer>
    )
  }
}

export default Saved

export const pageQuery = graphql`
  query SavedQuery {
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
