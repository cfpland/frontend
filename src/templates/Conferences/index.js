import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import ConferenceListHeader from '../../components/ConferenceListHeader'
import ConferenceList from '../../components/ConferenceList'
import ApiClient from '../../utilities/api-client'
import FindMoreConferencesCta from '../../components/FindMoreConferencesCta'
import LoadingCard from '../../components/LoadingCard'
import NoneFoundCard from '../../components/NoneFoundCard'
import SaveSearch from '../../components/SaveSearch'
import ConferenceListNav from '../../components/ConferenceListNav'
import { regions } from '../../utilities/regions'
import SavedTypesNav from '../../components/SavedTypesNav'
import { withAuthentication } from '../../context/withAuthentication'
import SubmitCfpCta from '../../components/SubmitCfpCta'
import { queryOptionsSet } from '../../utilities/queryOptionsSet'
import { filterByQuery } from '../../utilities/filter-conferences'

class Conferences extends React.Component {
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
    const {
      title,
      location,
      enableFilters,
      categories,
      query,
      auth,
      cta,
    } = this.props
    const conferences = this.state.conferences
      ? filterByQuery(this.state.conferences, query, categories, regions)
      : this.state.conferences

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
          {enableFilters && categories ? (
            <ConferenceListNav
              location={location}
              categories={categories}
              regions={regions}
            />
          ) : (
            ''
          )}
          {queryOptionsSet(query) && enableFilters ? (
            <SaveSearch query={query} />
          ) : (
            ''
          )}
          {conferences && conferences.length > 0 ? (
            <ConferenceList conferences={conferences} auth={auth} />
          ) : conferences && conferences.length === 0 ? (
            <NoneFoundCard />
          ) : (
            <LoadingCard />
          )}
        </div>
        <div className="container mt-2">
          {cta && cta === 'submit' ? (
            <SubmitCfpCta />
          ) : (
            <FindMoreConferencesCta auth={auth} />
          )}
        </div>
      </Layout>
    )
  }

  getSavedConferences = () => {
    this.apiClient
      .getSavedConferences()
      .then(saved =>
        this.apiClient
          .getConferences({
            atView: 'all_with_closed',
            atIds: saved.data.items.map(record => record.atConferenceId),
          })
          .then(all => this.populateList(all, saved))
      )
      .catch(error => {
        console.error(error.message)
      })
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

  populateList = (all, saved) => {
    if (this._isMounted) {
      const conferences = this.props.conferenceListFunction(all, saved)

      this.setState({
        ...this.state,
        conferences,
      })
    }
  }
}

export default withAuthentication(Conferences)
