import React from 'react'
import './style.scss'

const LoadMoreConferences = () => (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h5 className="card-title">More CFPs Available for Premium Members</h5>
      <p>
        <a href="https://premium.cfpland.com/?utm_source=web&utm_campaign=more-cfps">
          CFP Land Premium
        </a>{' '}
        gives tech conference speakers access to more conference data,
        submission tracking, and early access to new CFPs.
      </p>
      <a
        href="https://premium.cfpland.com/?utm_source=web&utm_campaign=more-cfps"
        className="btn btn-info btn-block mb-2"
      >
        Learn More
      </a>
    </div>
  </div>
)

export default LoadMoreConferences
