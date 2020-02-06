import React from 'react'
import './style.scss'
import GatsbyLink from 'gatsby-link'

const LoadMoreConferences = () => (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h5 className="card-title text-info font-weight-bold">
        More CFPs Available for Pro Members
      </h5>
      <p>
        <GatsbyLink to="/members/">CFP Land Professional</GatsbyLink> gives tech
        conference speakers access to more conference data, submission tracking,
        and early access to new CFPs.
      </p>
      <GatsbyLink
        to="/members/"
        className="btn btn-outline-info btn-block mb-2"
      >
        <i className="fa fa-arrow-up" /> Upgrade to Pro
      </GatsbyLink>
    </div>
  </div>
)

export default LoadMoreConferences
