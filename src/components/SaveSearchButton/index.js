import React from 'react'
import './style.scss'
import ApiClient from '../../utilities/api-client'

class SaveSearchButton extends React.Component {
  constructor(props) {
    super(props)
    this.apiClient = new ApiClient()
    this.state = {
      savedSearch: false,
      status: 'ready',
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, savedSearch: nextProps.savedSearch })
  }

  render = () => {
    const savedSearch = this.state.savedSearch
    return savedSearch ? (
      <a
        href="#"
        onClick={this.unsaveSearch}
        className="save-search btn btn-success"
        target="_blank"
      >
        <i className="fa fa-check-square mr-2" />
        Saved
      </a>
    ) : (
      <a
        href="#"
        onClick={this.saveSearch}
        className="save-search btn btn-outline-success"
        target="_blank"
      >
        <i className="fa fa-bookmark mr-2" />
        Save Search
      </a>
    )
  }

  saveSearch = e => {
    e.preventDefault()

    this.apiClient
      .putMeSearch({ options: this.props.query })
      .then(res => {
        this.setState({
          ...this.state,
          savedSearch: true,
          status: 'Success',
        })
      })
      .catch(e => {
        console.error(e.message)
        this.setState({ ...this.state, status: 'Error' })
      })
  }

  unsaveSearch = e => {
    e.preventDefault()

    this.apiClient
      .deleteMeSearch(this.state.savedSearch.id)
      .then(res => {
        this.setState({
          ...this.state,
          savedSearch: false,
          status: 'Success',
        })
      })
      .catch(e => {
        console.error(e.message)
        this.setState({ ...this.state, status: 'Error' })
      })
  }
}

export default SaveSearchButton
