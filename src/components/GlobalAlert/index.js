import React from 'react'
import { statuses } from '../../utilities/statuses'
import { Link } from 'gatsby'

class GlobalAlert extends React.Component {
  render = () => (
    <div>
      {this.props.auth.globalAlert &&
      this.props.auth.globalAlert.type === statuses.ERROR ? (
        <div className="alert alert-danger mb-0">
          <strong>Whoops! Something went wrong: </strong>
          {this.props.auth.globalAlert.message}
        </div>
      ) : (
        ''
      )}

      {this.props.auth &&
      this.props.auth.user &&
      this.props.auth.user.accountLevel === 'new' &&
      window.location.pathname !== '/c/onboarding/' ? (
        <div className="alert alert-info mb-0 text-center">
          <p>
            <strong>
              Whoops! Looks like your account setup is not complete.{' '}
            </strong>
            You will not be able to access Pro features until you complete your
            account setup.
          </p>
          <Link to="/c/onboarding/" className="btn btn-info">
            Complete Account Setup
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default GlobalAlert
