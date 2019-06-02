import React from 'react'
import { statuses } from '../../utilities/statuses'

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

      {this.props.auth.globalAlert &&
      this.props.auth.globalAlert.type === statuses.READY ? (
        <div className="alert alert-info mb-0">
          {this.props.auth.globalAlert.message}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default GlobalAlert
