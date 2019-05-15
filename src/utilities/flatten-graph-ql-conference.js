export const flattenGraphqlConference = gqlConference => {
  return {
    ...gqlConference.node.data,
    category: gqlConference.node.data.category[0].data.name,
  }
}
