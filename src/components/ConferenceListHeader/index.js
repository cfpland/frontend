import React from 'react'
import './style.scss'
import { Link } from 'gatsby'

class ConferenceListHeader extends React.Component {
  render() {
    const title = this.props.title || 'Upcoming Conference CFPs'
    const follow = this.props.follow
    const description = this.props.description
    return (
      <div className="d-none d-md-block">
        <h2 className="mb-3">
          {title}
          {follow ? (
            <span>
              <a
                className="pull-right text-info"
                target="_blank"
                href="https://twitter.com/cfp_land"
              >
                <span className="fa fa-twitter" />
              </a>
              <a
                className="pull-right mr-2 text-warning"
                target="_blank"
                href="https://feeds.cfpland.com/v2/rss/cfps"
              >
                <span className="fa fa-rss" />
              </a>
            </span>
          ) : (
            ''
          )}
        </h2>
        {description ? <p className="lead">{description}</p> : ''}
        <p className="text-muted">
          A "Call for Proposal" (or "CFP") is an open invitation for speakers to
          apply to a conference. Not sure what to expect? Check out our{' '}
          <Link to="/blog/new-conference-speakers">
            tips for new conference speakers
          </Link>
          .
        </p>
      </div>
    )
  }
}

export default ConferenceListHeader
