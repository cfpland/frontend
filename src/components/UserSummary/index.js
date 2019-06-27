import React from 'react'
import './style.scss'
import { Link } from 'gatsby'

class UserSummary extends React.Component {
  render() {
    const { auth } = this.props
    return (
      <div id="userSummary" className="container mt-1 mt-md-5">
        <h1>Your CFP Land Pro Summary</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mt-3">
              <div className="card-header">Open CFPs</div>
              <div className="card-body">
                <Link className="total text-info" to="/c/all/">
                  120
                </Link>
              </div>
              <div className="card-footer">
                <Link to="/c/all/">
                  <i className="fa fa-list mr-1" /> View All
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center mt-3">
              <div className="card-header">Saved CFPs</div>
              <div className="card-body">
                <Link className="total text-warning" to="/c/saved/">
                  9
                </Link>
              </div>
              <div className="card-footer">
                <Link to="/c/saved/">
                  <i className="fa fa-star mr-1" /> View Saved
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center mt-3">
              <div className="card-header">Applied</div>
              <div className="card-body">
                <Link className="total text-success" to="/c/applied/">
                  5
                </Link>
              </div>
              <div className="card-footer">
                <Link to="/c/applied/">
                  <i className="fa fa-list mr-1" /> View Applications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserSummary
