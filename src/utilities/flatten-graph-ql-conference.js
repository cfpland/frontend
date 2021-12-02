export const flattenGraphqlConference = gqlConference => {
  return {
    ...gqlConference.node.data,
    providerId: gqlConference.node.data.record_id,
    category: gqlConference.node.data.category[0].data.name,
  }
}
