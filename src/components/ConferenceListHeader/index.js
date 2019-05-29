import React from 'react'
import './style.scss'
import { Link } from 'gatsby'

class ConferenceListHeader extends React.Component {
  render() {
    const { follow, description, definition } = this.props
    const title = this.props.title || 'Upcoming Conference CFPs'
    return (
      <div>
        <h2 className="mb-3">
          {title}
          {follow ? (
            <span>
              <a
                className="pull-right text-info"
                target="_blank"
                href="https://twitter.com/cfp_land"
                title="Twitter Account"
              >
                <span className="fa fa-twitter" />
              </a>
              <a
                className="pull-right mr-3 text-warning"
                target="_blank"
                href="https://feeds.cfpland.com/v2/rss/cfps"
                title="RSS Feed"
              >
                <span className="fa fa-rss" />
              </a>
              <a
                className="pull-right mr-3"
                target="_blank"
                href="https://cfpland.github.io/api-docs/"
                title="API Documentation"
              >
                <span className="fa fa-code" />
              </a>
            </span>
          ) : (
            ''
          )}
        </h2>
        {description ? <p className="lead">{description}</p> : ''}
        {definition ? (
          <p className="text-muted">
            A "Call for Proposal" (or "CFP") is an open invitation for speakers
            to apply to a conference. Not sure what to expect? Check out our{' '}
            <Link to="/blog/new-conference-speakers">
              tips for new conference speakers
            </Link>
            .
          </p>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default ConferenceListHeader
