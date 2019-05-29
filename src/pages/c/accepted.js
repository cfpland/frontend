import React from 'react'
import Conferences from '../../templates/Conferences'

export default props => {
  const title = 'Accepted CFPs'
  const action = 'tracked'
  const status = 'accepted'
  const conferenceListFunction = (all, saved) => {
    return saved.data.items
      .map(savedConf => {
        try {
          const conference = all.data.items.find(
            conf =>
              savedConf.atConferenceId === conf.providerId &&
              savedConf.action === action
          )
          if (conference) {
            conference.isTracked = true
            conference.trackingStatus = savedConf.meta.trackingStatus
          }

          return conference
        } catch (e) {
          return null
        }
      })
      .filter(c => c && c.trackingStatus === status)
  }

  return (
    <Conferences
      location={props.location}
      title={title}
      conferenceListFunction={conferenceListFunction}
    />
  )
}
