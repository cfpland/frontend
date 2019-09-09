import React from 'react'
import Conferences from '../../templates/Conferences'
import { getSaved, getTracked } from '../../utilities/findFromSavedConfs'

export default props => {
  const title = 'Accepted Applications'
  const status = 'accepted'
  const conferenceListFunction = (all, saved) => {
    return all.data.items
      .map(conf => {
        conf.isSaved = !!getSaved(saved, conf)

        const trackedUserConf = getTracked(saved, conf)
        if (trackedUserConf) {
          conf.isTracked = true
          conf.trackingStatus = trackedUserConf.meta.trackingStatus
          conf.trackingNotes = trackedUserConf.meta.notes
        }

        return conf
      })
      .filter(c => c.isTracked && c.trackingStatus === status)
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
