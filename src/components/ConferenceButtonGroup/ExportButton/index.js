import React from 'react'
import './style.scss'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class ExportButton extends React.Component {
  render = () => {
    const { isAuthenticated, data, dropdown } = this.props
    const modalId = `export_${data.providerId}`

    return (
      <>
        {isAuthenticated ? (
          <a
            href="#"
            data-toggle="modal"
            data-target={`#${modalId}`}
            title="Export"
            className={
              dropdown
                ? 'dropdown-item d-block d-md-none'
                : 'nav-item nav-link border-right d-none d-md-block'
            }
          >
            {dropdown ? (
              <i className="fa fa-calendar mr-2" />
            ) : (
              <div>
                <i className="fa fa-calendar mr-2" />
              </div>
            )}
            Export
          </a>
        ) : (
          <OutboundLink
            className={
              dropdown
                ? 'dropdown-item d-block d-md-none'
                : 'nav-item nav-link border-right d-none d-md-block'
            }
            href="https://pro.cfpland.com/?utm_source=web&utm_campaign=track"
            target="_blank"
          >
            {dropdown ? (
              <i className="fa fa-calendar mr-2" />
            ) : (
              <div>
                <i className="fa fa-calendar mr-2" />
              </div>
            )}
            Export
          </OutboundLink>
        )}
      </>
    )
  }
}

export default ExportButton
