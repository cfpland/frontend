import React from 'react'
import './style.scss'
import ApiClient from '../../utilities/api-client'
import SaveSearchButton from '../SaveSearchButton'
import isEqual from 'lodash/isEqual'

class SaveSearch extends React.Component {
  constructor(props) {
    super(props)
    this.apiClient = new ApiClient()
    this.state = {
      searches: null,
      savedSearch: false,
      status: 'ready',
    }
  }

  componentDidMount = () => {
    if (this.apiClient.isAuthenticated) {
      this.getAllSearches()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.query, this.props.query)) {
      const savedSearch = this.isQuerySaved(
        this.state.searches,
        nextProps.query
      )
      this.setState({ ...this.state, savedSearch })
    }
  }

  render = () => {
    const isAuthenticated = this.apiClient.isAuthenticated

    return isAuthenticated ? (
      <div className="alert alert-success text-center" role="alert">
        <p>Get email alerts when new CFPs are found matching these criteria.</p>
        <SaveSearchButton
          query={this.props.query}
          savedSearch={this.state.savedSearch}
        />
      </div>
    ) : (
      <div className="alert alert-success text-center" role="alert">
        <p>Get email alerts when new CFPs are found matching these criteria.</p>
        <a
          href="https://pro.cfpland.com/?utm_source=web&utm_campaign=save-search"
          className="save-search btn btn-success"
          target="_blank"
        >
          <i className="fa fa-bookmark mr-2" />
          Save Search
        </a>
      </div>
    )
  }

  getAllSearches = () => {
    this.apiClient
      .getMeSearches()
      .then(res => {
        this.setState({
          ...this.state,
          searches: res.data.items,
          savedSearch: this.isQuerySaved(res.data.items, this.props.query),
          status: 'Success',
        })
      })
      .catch(e => {
        console.error(e.message)
        this.setState({ ...this.state, status: 'Error' })
      })
  }

  isQuerySaved = (savedSearches, query) => {
    return (
      savedSearches &&
      savedSearches.length > 0 &&
      savedSearches.find(search => isEqual(query, search.options))
    )
  }
}

export default SaveSearch
