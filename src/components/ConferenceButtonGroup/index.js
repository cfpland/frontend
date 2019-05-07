import React from 'react'
import './style.scss'

const ConferenceButtonGroup = ({ data }) => {
  return (
    <nav className="nav nav-pills nav-justified conference-item-nav mt-3">
      <a
        className="nav-item nav-link border-right"
        href="https://premium.cfpland.com/?utm_source=web&utm_campaign=save"
        target="_blank"
      >
        <div>
          <i className="fa fa-star-o" />
        </div>
        Save
      </a>
      <a
        className="nav-item nav-link border-right"
        href="https://premium.cfpland.com/?utm_source=web&utm_campaign=track"
        target="_blank"
      >
        <div>
          <i className="fa fa-paper-plane-o" />
        </div>
        Track
      </a>
      <a
        className="nav-item nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div>
          <i className="fa fa-ellipsis-h" />
        </div>{' '}
        More
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href={data.event_url} target="_blank">
          <i className="fa fa-globe mr-2" />
          Website
        </a>
        <a className="dropdown-item" href={data.cfp_url} target="_blank">
          <i className="fa fa-external-link mr-2" />
          CFP
        </a>
        <a
          className="dropdown-item"
          href="https://premium.cfpland.com/?utm_source=web&utm_campaign=hide"
          target="_blank"
        >
          <i className="fa fa-eye-slash mr-2" />
          Hide
        </a>
        <a
          className="dropdown-item"
          href="mailto:info@cfpland.com"
          target="_blank"
        >
          <i className="fa fa-flag-o mr-2" />
          Report Issue
        </a>
      </div>
    </nav>
  )
}

export default ConferenceButtonGroup
