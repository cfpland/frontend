import React from 'react'
import './style.scss'
import GatsbyLink from 'gatsby-link'

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
          <GatsbyLink
            className={
              dropdown
                ? 'dropdown-item d-block d-md-none'
                : 'nav-item nav-link border-right d-none d-md-block'
            }
            to="/members/"
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
          </GatsbyLink>
        )}
      </>
    )
  }
}

export default ExportButton
