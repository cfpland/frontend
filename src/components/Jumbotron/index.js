import React from 'react'
import './style.scss'

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-2">CFP Land</h1>
          <h2>Get out of the audience and onto the stage.</h2>
          <p className="lead">
            Sign up to get new Conference Calls for Proposals in your inbox
            every week.
          </p>
          <form className="row">
            <div className="col-sm-12 col-md-8">
              <input
                type="email"
                className="form-control form-control-lg mb-2"
                id="emailInput"
                aria-label="Enter email to get CFPs in your inbox every week"
                placeholder="Enter email"
              />
            </div>
            <div className="col-sm-12 col-md-3">
              <button
                type="submit"
                className="btn btn-lg btn-secondary btn-block mb-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Jumbotron
