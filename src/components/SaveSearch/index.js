import React from 'react'
import './style.scss'
import ApiClient from '../../utilities/api-client'
import SaveSearchButton from '../SaveSearchButton'
import isEqual from 'lodash/isEqual'
import pickBy from 'lodash/pickBy'
import mapValues from 'lodash/mapValues'
import { Link } from 'gatsby'

class SaveSearch extends React.Component {
  constructor(props) {
    super(props)
    this.apiClient = new ApiClient()
    const currentSearch = pickBy(props.query, o => o)
    this.state = {
      currentSearch,
      currentSearchSaved: false,
      searches: null,
    }
  }

  componentDidMount = () => {
    if (this.apiClient.isAuthenticated) {
      this.getAllSearches()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.query, this.props.query)) {
      const currentSearch = pickBy(nextProps.query, o => o)

      this.setState({
        ...this.state,
        currentSearch,
        currentSearchSaved: this.isCurrentSearchSaved(
          currentSearch,
          this.state.searches
        ),
      })
    }
  }

  render = () => {
    const isAuthenticated = this.apiClient.isAuthenticated

    return isAuthenticated ? (
      <div className="alert alert-success text-center" role="alert">
        {this.state.currentSearchSaved ? (
          <p>
            You will receive email alerts when new CFPs are found matching these
            criteria.
          </p>
        ) : (
          <p>
            Get email alerts when new CFPs are found matching these criteria.
          </p>
        )}
        <SaveSearchButton
          currentSearchSaved={this.state.currentSearchSaved}
          saveCurrentSearch={this.saveCurrentSearch}
          unsaveCurrentSearch={this.unsaveCurrentSearch}
        />
        {this.state.currentSearchSaved ? (
          <p className="mt-2 small all-searches-link">
            <Link to="/c/searches/">View all your saved searches</Link>
          </p>
        ) : (
          ''
        )}
      </div>
    ) : (
      ''
    )
  }

  getAllSearches = () => {
    this.apiClient
      .getMeSearches()
      .then(res => {
        this.setState({
          ...this.state,
          currentSearchSaved: this.isCurrentSearchSaved(
            this.state.currentSearch,
            res.data.items
          ),
          searches: res.data.items,
        })
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  saveCurrentSearch = e => {
    e.preventDefault()
    if (this.state.currentSearchSaved === false) {
      this.apiClient
        .putMeSearch({ options: this.state.currentSearch })
        .then(res => {
          this.state.searches.push(res.data)
          this.setState({
            ...this.state,
            currentSearchSaved: true,
          })
        })
        .catch(e => {
          console.error(e.message)
        })
    }
  }

  unsaveCurrentSearch = e => {
    e.preventDefault()
    if (this.state.currentSearchSaved === true) {
      const search = this.getSavedSearch()
      this.apiClient
        .deleteMeSearch(search.id)
        .then(() => {
          this.setState({
            ...this.state,
            currentSearchSaved: false,
            searches: this.state.searches.filter(
              existingSearch => existingSearch.id !== search.id
            ),
          })
        })
        .catch(e => {
          console.error(e.message)
        })
    }
  }

  isCurrentSearchSaved = (query, searches) => {
    // Converts bool strings to booleans
    query = mapValues(query, v =>
      v === 'true' ? true : v === 'false' ? false : v
    )

    return (
      query &&
      searches &&
      searches.length > 0 &&
      !!searches.find(search => isEqual(query, search.options))
    )
  }

  getSavedSearch = () =>
    this.state.searches.find(search =>
      isEqual(this.state.currentSearch, search.options)
    )
}

export default SaveSearch
