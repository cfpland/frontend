import React from 'react'
import './style.scss'
import { Link } from 'gatsby'

const FindMoreConferencesCta = () => (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <h5 className="card-title">Find More Conferences</h5>
      <p>
        Dozens of CFPs close every month. Check our list of CFPs often to make
        sure you never miss a speaking opportunity.
      </p>
      <Link to="/conferences/" className="btn btn-info btn-block mb-2">
        View All CFPs
      </Link>
    </div>
  </div>
)

export default FindMoreConferencesCta
