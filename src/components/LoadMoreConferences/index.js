import React from 'react'
import './style.scss'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const LoadMoreConferences = () => (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h5 className="card-title">More CFPs Available for Pro Members</h5>
      <p>
        <OutboundLink href="https://pro.cfpland.com/?utm_source=web&utm_campaign=more-cfps">
          CFP Land Professional
        </OutboundLink>{' '}
        gives tech conference speakers access to more conference data,
        submission tracking, and early access to new CFPs.
      </p>
      <OutboundLink
        href="https://pro.cfpland.com/?utm_source=web&utm_campaign=more-cfps"
        className="btn btn-success btn-block mb-2"
      >
        Learn More
      </OutboundLink>
    </div>
  </div>
)

export default LoadMoreConferences
