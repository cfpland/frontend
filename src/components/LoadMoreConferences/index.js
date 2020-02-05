import React from 'react'
import './style.scss'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const LoadMoreConferences = () => (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h5 className="card-title text-info font-weight-bold">
        More CFPs Available for Pro Members
      </h5>
      <p>
        <Link to="/members/">CFP Land Professional</Link> gives tech conference
        speakers access to more conference data, submission tracking, and early
        access to new CFPs.
      </p>
      <Link to="/members/" className="btn btn-outline-info btn-block mb-2">
        <i className="fa fa-arrow-up" /> Upgrade to Pro
      </Link>
    </div>
  </div>
)

export default LoadMoreConferences
