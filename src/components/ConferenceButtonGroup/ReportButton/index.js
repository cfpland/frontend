import React from 'react'

class ReportButton extends React.Component {
  render = () => {
    const { data } = this.props

    return (
      <a
        href="#"
        data-toggle="modal"
        data-target={`#reportModal_${data.providerId}`}
        title="Report Issue"
        className="dropdown-item"
      >
        <i className="fa fa-flag-o mr-2" />
        Report Issue
      </a>
    )
  }
}

export default ReportButton
