import React from 'react'
import './style.scss'

const SubscribeCfps = ({ remaining }) => (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h5 className="card-title">
        {remaining} more conference CFPs close this month. Subscribe to get all
        of them in your inbox each week!
      </h5>
      <form className="row">
        <div className="col-sm-12 col-md-8">
          <input
            type="email"
            className="form-control mb-2"
            id="emailInput"
            aria-label="Enter email to get CFPs in your inbox every week"
            placeholder="Enter email"
          />
        </div>
        <div className="col-sm-12 col-md-3">
          <button type="submit" className="btn btn-secondary btn-block mb-2">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
)

export default SubscribeCfps
