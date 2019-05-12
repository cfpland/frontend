import React from 'react'
import Auth from 'utilities/auth'
import { statuses } from '../utilities/statuses'

const defaultState = {
  globalAlert: {
    type: '',
    message: '',
  },
  authToken: null,
}
const AppContext = React.createContext(defaultState)

class AppProvider extends React.Component {
  state = defaultState

  componentDidMount() {
    let error
    const auth = new Auth()

    if (auth.isAuthenticated()) {
      auth.renewTokens()
    } else {
      error = auth.handleAuthentication()
    }

    if (error) {
      this.setState({
        ...this.state,
        globalAlert: {
          type: statuses.ERROR,
          message: error.errorDescription,
        },
      })
    } else {
      this.setState({
        ...this.state,
        authToken: auth.getAccessToken(),
      })
    }
  }

  render() {
    const { children } = this.props
    return (
      <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
    )
  }
}

export default AppContext

export { AppProvider }
