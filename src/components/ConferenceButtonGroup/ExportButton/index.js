import React from 'react'
import './style.scss'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class ExportButton extends React.Component {
  render = () => {
    const isAuthenticated = this.props.isAuthenticated
    const data = this.props.data
    const modalId = `export_${data.providerId}`

    return (
      <React.Fragment>
        {isAuthenticated ? (
          <a
            href="#"
            data-toggle="modal"
            data-target={`#${modalId}`}
            title="Export"
            className="dropdown-item"
          >
            <i className="fa fa-calendar mr-2" /> Export
          </a>
        ) : (
          <OutboundLink
            className="dropdown-item"
            href="https://pro.cfpland.com/?utm_source=web&utm_campaign=track"
            target="_blank"
          >
            <i className="fa fa-calendar mr-2" /> Export
          </OutboundLink>
        )}
      </React.Fragment>
    )
  }
}

export default ExportButton
