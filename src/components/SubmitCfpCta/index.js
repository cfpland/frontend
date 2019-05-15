import React from 'react'
import './style.scss'
import { Link } from 'gatsby'

const SubmitCfpCta = () => (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h5 className="card-title">Submit New Conference</h5>
      <p>
        Know of a CFP that we're missing? Add it to our list so you and other
        speakers can track it.
      </p>
      <Link to="/submit" className="btn btn-success btn-block mb-2">
        Submit New CFP
      </Link>
    </div>
  </div>
)

export default SubmitCfpCta
