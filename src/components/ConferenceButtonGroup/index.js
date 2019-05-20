import React from 'react'
import './style.scss'
import AppContext from '../../context/AppContext'
import SaveButton from './SaveButton'
import HideButton from './HideButton'

const ConferenceButtonGroup = ({ data }) => (
  <AppContext.Consumer>
    {context => (
      <nav className="nav nav-pills nav-justified conference-item-nav mt-3">
        <SaveButton data={data} isAuthenticated={context.isAuthenticated} />
        <a
          className="nav-item nav-link border-right"
          href="https://pro.cfpland.com/?utm_source=web&utm_campaign=track"
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
          <HideButton data={data} isAuthenticated={context.isAuthenticated} />
          <a
            className="dropdown-item"
            href="https://pro.cfpland.com/?utm_source=web&utm_campaign=export"
            target="_blank"
          >
            <i className="fa fa-calendar mr-2" />
            Export
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
    )}
  </AppContext.Consumer>
)

export default ConferenceButtonGroup
