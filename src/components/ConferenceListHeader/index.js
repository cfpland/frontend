import React from 'react'
import './style.scss'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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
              <OutboundLink
                className="pull-right text-info"
                target="_blank"
                href="https://twitter.com/cfp_land"
                title="Twitter Account"
              >
                <span className="fa fa-twitter" />
              </OutboundLink>
              <OutboundLink
                className="pull-right mr-3 text-warning"
                target="_blank"
                href="https://feeds.cfpland.com/v2/rss/cfps"
                title="RSS Feed"
              >
                <span className="fa fa-rss" />
              </OutboundLink>
              <OutboundLink
                className="pull-right mr-3"
                target="_blank"
                href="https://cfpland.github.io/api-docs/"
                title="API Documentation"
              >
                <span className="fa fa-code" />
              </OutboundLink>
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
            <Link to="/guides/speaking/">
              comprehensive guide to speaking at conferences
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
