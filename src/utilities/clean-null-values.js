export const cleanNullValues = obj => {
  Object.keys(obj).forEach(key => obj[key] === null && delete obj[key])
  return obj
}
