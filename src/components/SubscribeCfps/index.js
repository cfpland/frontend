import React from 'react'
import './style.scss'

const SubscribeCfps = ({ remaining }) => (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h5 className="card-title">
        {remaining
          ? remaining +
            ' more conference CFPs close soon. Subscribe to get all of them in your inbox each week!'
          : 'Subscribe to never miss a speaking opportunity again. Get upcoming CFPs in your inbox every week!'}
      </h5>
      <form
        className="row"
        action="https://cfpland.us15.list-manage.com/subscribe/post?u=4eba8b205fc13380cd3e6f3fc&amp;id=258f553f4e"
        method="post"
      >
        <div className="col-sm-12 col-md-8">
          <input
            name="EMAIL"
            type="email"
            className="form-control mb-2"
            id="emailInput"
            aria-label="Enter email to get CFPs in your inbox every week"
            placeholder="Enter email"
            required
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
