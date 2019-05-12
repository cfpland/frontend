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
    <div>
      {this.state.status === statuses.ERROR ? (
        <div className="alert alert-danger">
          <strong>Whoops! Something went wrong.</strong>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default GlobalAlert
