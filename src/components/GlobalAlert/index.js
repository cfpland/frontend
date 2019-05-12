import React from 'react'
import { statuses } from 'utilities/statuses'

class GlobalAlert extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: statuses.READY }
  }

  componentDidMount = () => {
    //
  }

  render = () => (
    <div className="">
      {this.state.status === statuses.ERROR ? (
        <div className="alert alert-danger">
          <strong>Whoops! Something went wrong.</strong> Check the console to
          learn more or contact support for help.
        </div>
      ) : (
        ''
      )}
      {this.state.status === statuses.SAVED ? (
        <div className="alert alert-success">
          <strong>Account saved!</strong> You can now carry on with your day.
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default GlobalAlert
