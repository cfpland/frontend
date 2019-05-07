import React from 'react'
import './style.scss'

const SaveSearch = () => (
  <div className="alert alert-success text-center" role="alert">
    <p>Get email alerts when new CFPs are found matching these criteria.</p>
    <a
      href="https://premium.cfpland.com/?utm_source=web&utm_campaign=save-search"
      className="save-search btn btn-success"
      target="_blank"
    >
      <i className="fa fa-bookmark mr-2" />
      Save Search
    </a>
  </div>
)

export default SaveSearch
