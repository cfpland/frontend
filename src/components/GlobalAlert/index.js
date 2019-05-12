import React from 'react'
import { statuses } from 'utilities/statuses'
import AppContext from '../../context/AppContext'

class GlobalAlert extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: statuses.READY }
  }

  render = () => (
    <AppContext.Consumer>
      {context => (
        <div>
          {console.log(context)}
          {this.state.status === statuses.ERROR ? (
            <div className="alert alert-danger">
              <strong>Whoops! Something went wrong.</strong>
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default GlobalAlert
