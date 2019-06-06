import React from 'react'
import './style.scss'
import * as calendarLink from 'generate-calendar-url'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class ExportModal extends React.Component {
  render = () => {
    const event = {
      title: `CFPs Close for ${this.props.data.name}`,
      start: new Date(this.props.data.cfp_due_date),
      end: new Date(this.props.data.cfp_due_date),
      location: this.props.data.location,
      description: `Apply here: ${
        this.props.data.cfp_url
      }\n\nMore CFPs closing soon: https://www.cfpland.com`,
    }
    return (
      <div
        className="modal fade"
        id={this.props.modalId}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exportModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exportModalLabel">
                Export CFP to Calendar
              </h5>
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
              <p>Select your calendar.</p>

              <div className="row mt-3 mb-3">
                <div className="col-3">
                  <OutboundLink
                    href={calendarLink.google(event)}
                    target="_blank"
                    className="btn btn-outline-primary btn-block p-2"
                  >
                    <div>
                      <i className="fa fa-google" />
                    </div>
                    Google
                  </OutboundLink>
                </div>

                <div className="col-3">
                  <OutboundLink
                    href={calendarLink.ical(event)}
                    target="_blank"
                    className="btn btn-outline-primary btn-block p-2"
                  >
                    <div>
                      <i className="fa fa-apple" />
                    </div>
                    Apple iCal
                  </OutboundLink>
                </div>

                <div className="col-3">
                  <OutboundLink
                    href={calendarLink.outlook(event)}
                    target="_blank"
                    className="btn btn-outline-primary btn-block p-2"
                  >
                    <div>
                      <i className="fa fa-calendar" />
                    </div>
                    Outlook
                  </OutboundLink>
                </div>

                <div className="col-3">
                  <OutboundLink
                    href={calendarLink.ics(event)}
                    target="_blank"
                    className="btn btn-outline-primary btn-block p-2"
                  >
                    <div>
                      <i className="fa fa-download" />
                    </div>
                    .ics File
                  </OutboundLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExportModal
