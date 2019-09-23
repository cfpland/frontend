import React from 'react'
import ApiClient from '../utilities/api-client'
import Auth from '../utilities/auth'
import { statuses } from '../utilities/statuses'

export function withAuthentication(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.authClient = new Auth()
      this.apiClient = new ApiClient()
      this.state = {
        isAuthenticated: false,
        user: null,
        globalAlert: {
          type: null,
          message: null,
        },
      }
    }

    componentDidMount = () => {
      if (this.authClient.isAuthenticated()) {
        this.authClient.renewTokens()

        this.setState({
          ...this.state,
          isAuthenticated: true,
        })

        if (!this.state.user) {
          this.apiClient.getMe().then(res => {
            this.setState({
              ...this.state,
              user: res.data,
            })
          })
        }
      } else {
        const error = this.authClient.handleAuthentication()

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
            isAuthenticated: false,
          })
        }
      }
    }

    render = () => (
      <WrappedComponent
        auth={this.state}
        authClient={this.authClient}
        apiClient={this.apiClient}
        {...this.props}
      />
    )
  }
}
