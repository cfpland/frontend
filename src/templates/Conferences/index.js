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

const queryOptionsSet = query => {
  return query && (query.category || query.region)
}

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
      this.getSavedConferences()
    } else {
      window.location.href = '/'
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render = () => {
    const { title, location, enableFilters, categories, query } = this.props
    const conferences = this.state.conferences
      ? this.filterByCategoryAndRegion(
          this.state.conferences,
          query,
          categories,
          regions
        )
      : this.state.conferences

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title={title} />
        <div id="cfps" className="container mt-2 mt-md-5">
          <ConferenceListHeader
            title={title}
            follow={false}
            definition={false}
          />
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
            <ConferenceList conferences={conferences} />
          ) : conferences && conferences.length === 0 ? (
            <NoneFoundCard />
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
      const conferences = this.props.conferenceListFunction(all, saved)

      this.setState({
        ...this.state,
        conferences,
      })
    }
  }

  filterByCategoryAndRegion = (conferences, query, categories, regions) => {
    if (query) {
      const selectedRegion = regions.find(
        region => query.region && region.slug === query.region
      )
      if (selectedRegion) {
        conferences = conferences.filter(c => c.region === selectedRegion.name)
      }

      const selectedCategory = categories.find(
        category =>
          query.category &&
          category.node.data.name.toLowerCase() === query.category
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
}

export default Conferences
