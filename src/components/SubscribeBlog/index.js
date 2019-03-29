import React from 'react'
import './style.scss'

const SubscribeBlog = () => (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h5 className="card-title">Never Miss a CFP Again</h5>
      <p className="card-text">
        If you're a tech conference speaker, this newsletter is for you. Get all
        the <a href="/#cfps">upcoming CFPs</a> delivered to your inbox every
        week.
      </p>
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

export default SubscribeBlog
