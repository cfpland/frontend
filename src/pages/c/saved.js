import React from 'react'
import SavedOrHidden from '../../templates/SavedOrHidden'

export default props => {
  const title = 'Your Saved CFPs'
  const action = 'saved'
  const conferenceListFunction = (all, saved) => {
    return saved.data.items
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
      .filter(c => c)
  }

  return (
    <SavedOrHidden
      location={props.location}
      title={title}
      conferenceListFunction={conferenceListFunction}
      action={action}
    />
  )
}
