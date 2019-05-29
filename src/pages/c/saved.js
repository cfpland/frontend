import React from 'react'
import Conferences from '../../templates/Conferences'

export default props => {
  const title = 'Saved CFPs'
  const action = 'saved'
  const conferenceListFunction = (all, saved) => {
    return saved.data.items
      .reverse()
      .map(savedConf => {
        try {
          const conference = all.data.items.find(
            conf =>
              savedConf.atConferenceId === conf.providerId &&
              savedConf.action === action
          )
          conference.isSaved = true

          return conference
        } catch (e) {
          return null
        }
      })
      .filter(c => c && !c.isHidden)
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
