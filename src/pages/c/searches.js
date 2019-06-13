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
import queryString from 'query-string'
import { Link } from 'gatsby'
import { withAuthentication } from '../../context/withAuthentication'

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
    } else {
      window.location.href = '/'
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render = () => {
    const { location, auth } = this.props
    const title = 'Your Saved Searches'
    const searches = this.state.searches

    return (
      <Layout location={location} auth={auth}>
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
                  {this.showPerks(search)}
                  {this.showDates(search)}
                  <p>
                    <strong>Created: </strong>
                    {moment(search.createdAt).format('LL')}
                  </p>
                  <Link
                    className="mr-2 btn btn-info view-search-results-button"
                    to={this.getSearchUrl(search)}
                  >
                    View Results
                  </Link>
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
          <FindMoreConferencesCta auth={auth} />
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

  getSearchUrl = search => `/c/all?${queryString.stringify(search.options)}`

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

  showPerks = search => {
    const hotel = get(search, 'options.hotel_covered')
    const travel = get(search, 'options.travel_covered')
    const stipend = get(search, 'options.stipend_covered')
    if (hotel || travel || stipend) {
      return (
        <p>
          <strong>Perks: </strong>
          {hotel ? (
            <i className="fa fa-hotel mr-2" title="Hotel" aria-label="Hotel" />
          ) : (
            ''
          )}
          {travel ? (
            <i
              className="fa fa-plane mr-2"
              title="Travel"
              aria-label="Travel"
            />
          ) : (
            ''
          )}
          {stipend ? (
            <i
              className="fa fa-money mr-2"
              title="Stipend"
              aria-label="Stipend"
            />
          ) : (
            ''
          )}
        </p>
      )
    }
  }

  showDates = search => {
    console.log(search)
    const after = get(search, 'options.event_start_date_after')
    const before = get(search, 'options.event_start_date_before')
    if (after || before) {
      return (
        <div className="row">
          {after ? (
            <div className="col">
              <p>
                <strong>After: </strong>
                {moment(after).format('l')}
              </p>
            </div>
          ) : (
            ''
          )}
          {before ? (
            <div className="col">
              <p>
                <strong>Before: </strong>
                {moment(before).format('l')}
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }
  }
}

export default withAuthentication(Searches)
