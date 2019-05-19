import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import ConferenceListHeader from '../../components/ConferenceListHeader'
import ConferenceList from '../../components/ConferenceList'
import ApiClient from '../../utilities/api-client'
import SavedListNav from '../../components/SavedListNav'
import FindMoreConferencesCta from '../../components/FindMoreConferencesCta'
import LoadingCard from '../../components/LoadingCard'
import NoneFoundCard from '../../components/NoneFoundCard'

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
      this.getSavedConferences()
    } else {
      window.location.href = '/'
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render = () => {
    const { location } = this.props
    const conferences = this.state.conferences
    const title = 'Your Saved CFPs'

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title={title} />
        <div id="cfps" className="container mt-2 mt-md-5">
          <ConferenceListHeader
            title={title}
            follow={false}
            definition={false}
          />
          <SavedListNav location={location} />
          {conferences && conferences.length > 0 ? (
            <ConferenceList conferences={conferences} />
          ) : conferences && conferences.length === 0 ? (
            <NoneFoundCard action="saved" />
          ) : (
            <LoadingCard />
          )}
        </div>
        <div className="container mt-2">
          <FindMoreConferencesCta />
        </div>
      </Layout>
    )
  }

  getSavedConferences = () => {
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
      const conferences = saved.data.items.map(savedConf => {
        return all.data.items.find(
          conf => savedConf.atConferenceId === conf.providerId
        )
      })

      this.setState({
        ...this.state,
        conferences,
      })
    }
  }
}

export default Saved
