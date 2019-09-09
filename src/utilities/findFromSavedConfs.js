export const getSaved = (saved, conf) =>
  saved.data.items.find(
    savedConf =>
      savedConf.atConferenceId === conf.providerId &&
      savedConf.action === 'saved'
  )

export const getTracked = (saved, conf) =>
  saved.data.items.find(
    savedConf =>
      savedConf.atConferenceId === conf.providerId &&
      savedConf.action === 'tracked'
  )
