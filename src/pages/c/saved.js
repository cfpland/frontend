import React from 'react'
import Conferences from '../../templates/Conferences'
import {
  getHidden,
  getSaved,
  getTracked,
} from '../../utilities/findFromSavedConfs'

export default props => {
  const title = 'Saved CFPs'
  const conferenceListFunction = (all, saved) => {
    return all.data.items
      .map(conf => {
        conf.isSaved = !!getSaved(saved, conf)
        conf.isHidden = !!getHidden(saved, conf)

        const trackedUserConf = getTracked(saved, conf)
        if (trackedUserConf) {
          conf.isTracked = true
          conf.trackingStatus = trackedUserConf.meta.trackingStatus
          conf.trackingNotes = trackedUserConf.meta.notes
        }

        return conf
      })
      .filter(c => !c.isHidden && c.isSaved)
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
