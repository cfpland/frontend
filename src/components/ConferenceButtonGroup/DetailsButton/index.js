import React from 'react'
import './style.scss'
import GatsbyLink from 'gatsby-link'

class DetailsButton extends React.Component {
  render = () => {
    const { data, dropdown } = this.props
    const providerId = data.record_id || data.providerId

    return (
      <>
        <GatsbyLink
          className={
            dropdown
              ? 'dropdown-item d-block d-md-none'
              : 'nav-item nav-link border-right d-none d-md-block'
          }
          to={`/conferences/${providerId}/`}
          target="_blank"
        >
          {dropdown ? (
            <i className="fa fa-info-circle mr-2" />
          ) : (
            <div>
              <i className="fa fa-info-circle" />
            </div>
          )}
          Details
        </GatsbyLink>
      </>
    )
  }
}

export default DetailsButton
