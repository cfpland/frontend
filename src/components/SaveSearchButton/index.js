import React from 'react'
import './style.scss'
import ApiClient from '../../utilities/api-client'

class SaveSearchButton extends React.Component {
  constructor(props) {
    super(props)
    this.apiClient = new ApiClient()
    this.state = {
      currentSearch: null,
      currentSearchSaved: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      currentSearch: nextProps.currentSearch,
      currentSearchSaved: nextProps.currentSearchSaved,
    })
  }

  render = () => {
    return this.state.currentSearchSaved ? (
      <a
        href="#"
        onClick={this.props.unsaveCurrentSearch}
        className="save-search btn btn-success unsave"
        target="_blank"
      >
        <i className="fa fa-check-square mr-2" />
        <span />
      </a>
    ) : (
      <a
        href="#"
        onClick={this.props.saveCurrentSearch}
        className="save-search btn btn-outline-success"
        target="_blank"
      >
        <i className="fa fa-bookmark mr-2" />
        Save Search
      </a>
    )
  }
}

export default SaveSearchButton
