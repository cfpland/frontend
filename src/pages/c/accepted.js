import React from 'react'
import Tracking from '../../templates/Tracking'

export default props => {
  const title = 'CFPs Accepted'
  const action = 'accepted'
  const conferenceListFunction = (all, saved) => {
    return saved.data.items
      .map(savedConf => {
        try {
          const conference = all.data.items.find(
            conf =>
              savedConf.atConferenceId === conf.providerId &&
              savedConf.action === action
          )
          conference.isTracked = true

          return conference
        } catch (e) {
          return null
        }
      })
      .filter(c => c)
  }

  return (
    <Tracking
      location={props.location}
      title={title}
      conferenceListFunction={conferenceListFunction}
      action={action}
    />
  )
}
