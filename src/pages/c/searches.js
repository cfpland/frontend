import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import ApiClient from '../../utilities/api-client'
import NoneFoundCard from '../../components/NoneFoundCard'
import LoadingCard from '../../components/LoadingCard'
import SaveSearchButton from '../../components/SaveSearchButton'
import get from 'lodash/get'
import capitalize from 'lodash/capitalize'
import moment from 'moment'
import FindMoreConferencesCta from '../../components/FindMoreConferencesCta'

class Searches extends React.Component {
  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      searches: null,
    }
    this.apiClient = new ApiClient()
  }

  componentDidMount = () => {
    this._isMounted = true

    if (this.apiClient.isAuthenticated) {
      this.getAllSearches()
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render = () => {
    const { location } = this.props
    const title = 'Your Saved Searches'
    const searches = this.state.searches

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title={title} />
        <div id="searches" className="container mt-2 mt-md-5">
          <div className="">
            <h2>Saved Searches</h2>
          </div>
          {searches && searches.length > 0 ? (
            <ul className="list-group list-group-flush">
              {searches.map((search, i) => (
                <li key={i} className="list-group-item">
                  {this.showCategory(search)}
                  {this.showRegion(search)}
                  <p>
                    <strong>Created: </strong>
                    {moment(search.createdAt).format('LL')}
                  </p>
                  <SaveSearchButton
                    currentSearchSaved={true}
                    saveCurrentSearch={e => e.preventDefault()}
                    unsaveCurrentSearch={e => this.unsaveSearch(e, search.id)}
                  />
                </li>
              ))}
            </ul>
          ) : searches && searches.length === 0 ? (
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

  unsaveSearch = (e, searchId) => {
    e.preventDefault()

    this.apiClient
      .deleteMeSearch(searchId)
      .then(() => {
        this.setState({
          ...this.state,
          searches: this.state.searches.filter(
            existingSearch => existingSearch.id !== searchId
          ),
        })
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  getAllSearches = () => {
    this.apiClient
      .getMeSearches()
      .then(res => {
        this.setState({
          ...this.state,
          searches: res.data.items,
        })
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  showCategory = search => {
    const option = get(search, 'options.category')
    if (option) {
      return (
        <p>
          <strong>Category: </strong>
          {capitalize(option)}
        </p>
      )
    }
  }

  showRegion = search => {
    const option = get(search, 'options.region')
    if (option) {
      return (
        <p>
          <strong>Region: </strong>
          {capitalize(option)}
        </p>
      )
    }
  }
}

export default Searches
