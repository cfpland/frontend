import React from 'react'
import './style.scss'
import { Link } from '@reach/router'
import ConferenceButtonGroup from '../ConferenceButtonGroup'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { statuses } from '../../utilities/statuses'
import get from 'lodash/get'
import ConferenceTitle from 'components/ConferenceTitle'
import CfpDate from 'components/CfpDate'

class Conference extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSaved: false,
      isTracked: false,
      trackingStatus: null,
      status: statuses.READY,
    }
  }

  render = () => {
    const {
      name,
      cfp_days_until,
      cfp_url,
      cfp_due_date,
      icon,
      category,
      is_new,
      isSaved,
      isTracked,
      event_start_date,
      description,
    } = this.props.data
    const is_pro = cfp_days_until > 21

    return (
      <>
        <li
          className={
            [statuses.CLICKED, statuses.SAVED].includes(this.state.status)
              ? 'list-group-item mb-0'
              : 'list-group-item'
          }
        >
          <div className="mt-1">
            {categoryBadge(category)}
            {newBadge(is_new)}
            {proBadge(is_pro)}
            <OutboundLink
              href={cfp_url}
              target="_blank"
              onClick={this.showClickMessage}
            >
              {this.props.single ? (
                <h1 style={{ fontSize: '1.2rem' }}>
                  <ConferenceTitle name={name} iconUrl={get(icon, '0.url')} />
                </h1>
              ) : (
                <h3>
                  <ConferenceTitle name={name} iconUrl={get(icon, '0.url')} />
                </h3>
              )}
            </OutboundLink>
            {this.props.single && description && description.length > 5 ? (
              <p className="mt-4">
                {description.replace(/<\/?[^>]+(>|$)/g, '')}
              </p>
            ) : (
              ''
            )}
            <div className="row mt-3 mb-3">
              <div className="col-md-6">
                <p>
                  <strong>Location:</strong> {getLocation(this.props.data)}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <CfpDate cfpDueDate={cfp_due_date} />
                </p>
                <p>
                  <strong>Conference Date:</strong>{' '}
                  <time dateTime={event_start_date}>{event_start_date}</time>
                </p>
              </div>
            </div>
            {this.props.hideButtons ? (
              ''
            ) : (
              <ConferenceButtonGroup
                data={this.props.data}
                auth={this.props.auth}
                abstracts={this.props.abstracts}
                actionCallback={this.actionCallback}
              />
            )}
          </div>
        </li>
        {this.state.status === statuses.CLICKED ? (
          isTracked ? (
            ''
          ) : isSaved ? (
            <div className="alert alert-warning">
              <strong>Did you apply?</strong> Don't forget to{' '}
              <strong>
                <i className="fa fa-compass" /> Track
              </strong>{' '}
              this CFP.
            </div>
          ) : (null)
        ) : (
          ''
        )}

        {this.state.status === statuses.SAVED ? (
          this.state.isTracked && this.state.trackingStatus === 'applied' ? (
            <div className="alert alert-info">
              <strong>Nice work 👍</strong> Your application is being tracked.
            </div>
          ) : this.state.isTracked &&
            this.state.trackingStatus === 'accepted' ? (
            <div className="alert alert-success">
              <strong>🎉 Congratulations!</strong> Now to finish those
              slides...😬
            </div>
          ) : this.state.isTracked &&
            this.state.trackingStatus === 'rejected' ? (
            <div className="alert alert-light">
              <strong>Not this time.</strong> But that's okay, just keep
              applying!
            </div>
          ) : this.state.isSaved ? (
            <div className="alert alert-info">
              <strong>Saved!</strong> You'll get reminders 21, 7, and 3 days
              before this CFP closes.
            </div>
          ) : (
            <div className="mb-3" />
          )
        ) : (
          ''
        )}
      </>
    )
  }

  actionCallback = e => {
    this.setState({
      ...this.state,
      ...e,
      status: statuses.SAVED,
    })
  }

  showClickMessage = e => {
    this.setState({
      ...this.state,
      status: statuses.CLICKED,
    })
  }
}

function newBadge(is_new) {
  return is_new ? (
    <div
      className="badge badge-primary pull-right p-2 mt-2 ml-2"
      data-toggle="tooltip"
      data-placement="top"
      title="Created in the past 7 days"
    >
      🔔 New
    </div>
  ) : (
    ''
  )
}

function proBadge(is_pro) {
  return is_pro ? (
    <div
      className="badge badge-info pull-right p-2 mt-2"
      data-toggle="tooltip"
      data-placement="top"
      title="Only displayed to Pro Users"
    >
      <i className="fa fa-arrow-up" /> Pro
    </div>
  ) : (
    ''
  )
}

function categoryBadge(category) {
  return category ? (
    <Link
      className="badge badge-secondary pull-right p-2 mt-2 ml-2"
      to={`/conferences/${category.toLowerCase()}`}
    >
      #{category}
    </Link>
  ) : (
    ''
  )
}

function getLocation({ location }) {
  return <>{location}</>
}

export default Conference
