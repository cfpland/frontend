import React from 'react'
import './style.scss'

class SaveSearchButton extends React.Component {
  render = () => {
    return this.props.currentSearchSaved ? (
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
