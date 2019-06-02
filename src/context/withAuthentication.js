import React from 'react'
import ApiClient from '../utilities/api-client'
import Auth from '../utilities/auth'

export function withAuthentication(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.auth = new Auth()
      this.api = new ApiClient()
      this.state = {
        isAuthenticated: false,
        error: null,
        user: null,
      }
    }

    componentDidMount = () => {
      if (this.auth.isAuthenticated()) {
        this.auth.renewTokens()

        this.setState({
          ...this.state,
          isAuthenticated: true,
        })

        if (!this.state.user) {
          this.api.getMe().then(res => {
            this.setState({
              ...this.state,
              user: res.data,
            })
          })
        }
      } else {
        this.setState({
          ...this.state,
          error: this.auth.handleAuthentication(),
        })
      }
    }

    render = () => <WrappedComponent auth={this.state} {...this.props} />
  }
}
