import React from 'react'
import get from 'lodash/get'
import ZapierClient from '../../../utilities/zapier-client'
import { statuses } from '../../../utilities/statuses'
import ReactGA from 'react-ga'

class ReportModal extends React.Component {
  constructor(props) {
    super(props)
    this.zapierClient = new ZapierClient()
    this.state = {
      status: statuses.READY,
      message: null,
    }
  }

  render = () => {
    const { auth, data } = this.props

    return (
      <div
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="reportModal"
        id={`reportModal_${data.providerId}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Report an issue</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <label htmlFor="message">
                Please provide any details you can about the issue:
              </label>
              <textarea
                rows="2"
                id="message"
                className="form-control"
                onChange={this.updateMessage}
                placeholder="eg: Location is missing, wrong date, etc."
                value={this.state.message || ''}
              />
            </div>
            <div className="modal-footer">
              {this.state.status === statuses.SAVED ? (
                <button className="btn btn-info disabled">
                  Reported <i className="fa fa-check-circle-o" />
                </button>
              ) : (
                <button
                  className="btn btn-info"
                  onClick={e => this.reportIssue(e, data, auth)}
                >
                  Report
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  reportIssue = (e, data, auth) => {
    e.preventDefault()

    const issue = {
      email: get(auth, 'user.email') || '',
      reportType: 'issue',
      conferenceId: data.providerId,
      message: this.state.message || '',
    }

    this.zapierClient
      .postIssue(issue)
      .then(res => {
        this.setState({
          ...this.state,
          status: statuses.SAVED,
        })

        setTimeout(() => {
          window.$(`#reportModal_${data.providerId}`).modal('hide')
          this.setState({
            ...this.state,
            status: statuses.READY,
          })
        }, 2000)

        ReactGA.event({
          category: 'Conference',
          action: 'report',
          label: data.providerId,
        })
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  updateMessage = e => {
    this.setState({
      ...this.state,
      message: e.target.value,
    })
  }
}

export default ReportModal
