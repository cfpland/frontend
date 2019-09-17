import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import { getSaved, getTracked } from '../../utilities/findFromSavedConfs'
import Meta from 'components/Meta'
import { siteMetadata } from '../../../gatsby-config'
import ConferenceListHeader from 'components/ConferenceListHeader'
import SavedTypesNav from 'components/SavedTypesNav'
import ConferenceListNav from 'components/ConferenceListNav'
import { regions } from '../../utilities/regions'
import { queryOptionsSet } from '../../utilities/queryOptionsSet'
import SaveSearch from 'components/SaveSearch'
import ConferenceList from 'components/ConferenceList'
import NoneFoundCard from 'components/NoneFoundCard'
import LoadingCard from 'components/LoadingCard'
import SubmitCfpCta from 'components/SubmitCfpCta'
import Layout from 'components/Layout'
import { withAuthentication } from '../../context/withAuthentication'
import ApiClient from '../../utilities/api-client'

class All extends React.Component {
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
      if (this.props.savedOnly) {
        this.getSavedConferences()
      } else {
        this.getAllConferences()
      }
    } else {
      window.location.href = '/'
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }
  render = () => {
    const { data, location, auth } = this.props
    console.log(auth)
    const title = 'All Upcoming CFPs'
    const categories = get(data, 'category.edges')
    const query = queryString.parse(this.props.location.search)

    const conferenceListFunction = (all, saved) => {
      return all.data.items.map(conf => {
        conf.isSaved = !!getSaved(saved, conf)

        const trackedUserConf = getTracked(saved, conf)
        if (trackedUserConf) {
          conf.isTracked = true
          conf.trackingStatus = trackedUserConf.meta.trackingStatus
          conf.trackingNotes = trackedUserConf.meta.notes
        }

        return conf
      })
    }
    const conferences = []

    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title={title} />
        <div id="cfps" className="container mt-2 mt-md-5">
          <ConferenceListHeader
            title={title}
            follow={false}
            definition={false}
          />
          <SavedTypesNav location={location} />
          {categories ? (
            <ConferenceListNav
              location={location}
              categories={categories}
              regions={regions}
            />
          ) : (
            ''
          )}
          {queryOptionsSet(query) ? <SaveSearch query={query} /> : ''}
          {conferences && conferences.length > 0 ? (
            <ConferenceList conferences={conferences} auth={auth} />
          ) : conferences && conferences.length === 0 ? (
            <NoneFoundCard />
          ) : (
            <LoadingCard />
          )}
        </div>
        <div className="container mt-2">
          <SubmitCfpCta />
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(All)

export const pageQuery = graphql`
  query AllCategoriesQuery {
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
