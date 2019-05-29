import React from 'react'
import Conferences from '../../templates/Conferences'

export default props => {
  const title = 'Rejections'
  const action = 'tracked'
  const status = 'rejected'
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
      .filter(c => c && c.trackingStatus === status && !c.isHidden)
  }

  return (
    <Conferences
      location={props.location}
      title={title}
      conferenceListFunction={conferenceListFunction}
      savedOnly={true}
    />
  )
}
