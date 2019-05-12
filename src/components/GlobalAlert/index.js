import React from 'react'
import { statuses } from 'utilities/statuses'
import AppContext from '../../context/AppContext'

class GlobalAlert extends React.Component {
  render = () => (
    <AppContext.Consumer>
      {context => (
        <div>
          {context.globalAlert &&
          context.globalAlert.type === statuses.ERROR ? (
            <div className="alert alert-danger mb-0">
              <strong>Whoops! Something went wrong: </strong>
              {context.globalAlert.message}
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
