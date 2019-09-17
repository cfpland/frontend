import React from 'react'

export function withConferences(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: null,
      }
    }

    componentWillReceiveProps = nextProps => {
      this.apiClient = nextProps.apiClient
      this.auth = nextProps.auth
      if (
        this.auth &&
        this.apiClient &&
        this.auth.isAuthenticated &&
        this.auth.user
      ) {
        this.getAllConferences(this.auth.user)
      }
    }

    render = () => (
      <WrappedComponent
        auth={this.auth}
        apiClient={this.apiClient}
        conferences={this.state}
        {...this.props}
      />
    )

    getAllConferences = user => {
      this.apiClient
        .getConferences()
        .then(res => {
          this.setState({
            ...this.state,
            data: this.mapUserConferencesToConferences(res.data.items, user),
          })
        })
        .catch(e => {
          console.error(e.message)
        })
    }

    mapUserConferencesToConferences = (conferences, user) => {
      return conferences.map(conference => {
        conference.isSaved = user.savedConferences.find(
          savedConf => savedConf.atConferenceId === conference.providerId
        )
        const tracked = user.trackedConferences.find(
          savedConf => savedConf.atConferenceId === conference.providerId
        )
        if (tracked) {
          conference.isTracked = true
          conference.trackingStatus = 'applied'
          conference.trackingNotes = 'tbd'
        }
        return conference
      })
    }
  }
}
