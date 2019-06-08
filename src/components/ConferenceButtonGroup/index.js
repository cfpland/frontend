import React from 'react'
import './style.scss'
import SaveButton from './SaveButton'
import HideButton from './HideButton'
import TrackButton from './TrackButton'
import ExportButton from './ExportButton'
import ExportModal from './ExportModal'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import ReportButton from './ReportButton'
import ReportModal from './ReportModal'

const ConferenceButtonGroup = ({ data, auth }) => (
  <nav className="nav nav-pills nav-justified conference-item-nav mt-3">
    <SaveButton data={data} isAuthenticated={auth.isAuthenticated} />
    <TrackButton data={data} isAuthenticated={auth.isAuthenticated} />
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
      <OutboundLink
        className="dropdown-item"
        href={data.event_url}
        target="_blank"
      >
        <i className="fa fa-globe mr-2" />
        Website
      </OutboundLink>
      <OutboundLink
        className="dropdown-item"
        href={data.cfp_url}
        target="_blank"
      >
        <i className="fa fa-external-link mr-2" />
        CFP
      </OutboundLink>
      <HideButton data={data} isAuthenticated={auth.isAuthenticated} />
      <ExportButton data={data} isAuthenticated={auth.isAuthenticated} />
      <ReportButton data={data} />
    </div>
    <ExportModal modalId={`export_${data.providerId}`} data={data} />
    <ReportModal data={data} auth={auth} />
  </nav>
)

export default ConferenceButtonGroup
