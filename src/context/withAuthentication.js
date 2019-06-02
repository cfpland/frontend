import React from 'react'
import ApiClient from '../utilities/api-client'
import Auth from '../utilities/auth'
import { statuses } from '../utilities/statuses'

export function withAuthentication(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.auth = new Auth()
      this.api = new ApiClient()
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
        const error = this.auth.handleAuthentication()

        if (error) {
          this.setState({
            ...this.state,
            globalAlert: {
              type: statuses.ERROR,
              message: error.errorDescription,
            },
          })
        }
      }
    }

    render = () => <WrappedComponent auth={this.state} {...this.props} />
  }
}
