import React from 'react'

export function withTrackedConferences(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: null,
      }
      this.callMade = false
    }

    componentWillReceiveProps = nextProps => {
      this.apiClient = nextProps.apiClient
      this.auth = nextProps.auth
      if (
        this.auth &&
        this.apiClient &&
        this.auth.isAuthenticated &&
        this.auth.user &&
        this.callMade === false
      ) {
        this.callMade = true
        this.getTrackedConferences(this.auth.user)
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

    getTrackedConferences = user => {
      const atIds = user.trackedConferences.map(
        conference => conference.atConferenceId
      )
      this.apiClient
        .getConferences({ atIds, atView: 'all_with_closed' })
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
          conference.trackingStatus = tracked.status
          conference.trackingNotes = tracked.notes
          conference.abstracts = tracked.abstracts
        }
        return conference
      })
    }
  }
}
