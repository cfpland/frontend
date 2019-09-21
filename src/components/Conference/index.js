import React from 'react'
import './style.scss'
import { Link } from '@reach/router'
import ConferenceButtonGroup from '../ConferenceButtonGroup'
import moment from 'moment'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { statuses } from '../../utilities/statuses'

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
      location,
      category,
      is_new,
      isSaved,
      isTracked,
      event_start_date,
    } = this.props.data
    const isClosed = moment(cfp_due_date)
      .endOf('day')
      .isBefore(moment().startOf('day'))
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
              <h3>
                <div className="pull-left">
                  {icon && icon[0] && icon[0].url ? (
                    <img
                      src={icon[0].url}
                      style={{
                        display: 'block',
                        margin: '0 1rem 0 0',
                        height: '24px',
                        width: '24px',
                      }}
                    />
                  ) : (
                    ''
                  )}
                </div>
                {name}
              </h3>
            </OutboundLink>
            <p className={isClosed ? 'text-muted' : ''}>
              <strong>CFPs {isClosed ? 'Closed' : 'Due'}:</strong>{' '}
              <time dateTime={cfp_due_date}>{cfp_due_date}</time>
            </p>
            <p>
              <strong>Perks:</strong> {perksList(this.props.data)}
            </p>
            <p>
              <strong>Conference Date:</strong>{' '}
              <time dateTime={event_start_date}>{event_start_date}</time>
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
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
          ) : (
            <div className="alert alert-warning">
              <strong>Like this one?</strong> Click{' '}
              <strong>
                <i className="fa fa-star-o" /> Save
              </strong>{' '}
              to get reminders before it's due.
            </div>
          )
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

function perksList(data) {
  let result = ''
  if (data.perks_checked) {
    if (data.travel_covered) {
      result += 'Travel, '
    }
    if (data.hotel_covered) {
      result += 'Hotel, '
    }
    if (data.stipend_covered) {
      result += 'Stipend, '
    }
    if (result.length < 2) {
      result = 'None'
    } else {
      result = result.substring(0, result.length - 2)
    }
  } else {
    result = '❓'
  }

  return result
}

export default Conference
