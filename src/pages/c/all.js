import React from 'react'
import Conferences from '../../templates/Conferences'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import queryString from 'query-string'

class All extends React.Component {
  render = () => {
    const title = 'All Upcoming CFPs'
    const categories = get(this.props.data, 'category.edges')
    const query = queryString.parse(this.props.location.search)

    const conferenceListFunction = (all, saved) => {
      return all.data.items
        .map(conf => {
          conf.isSaved = !!saved.data.items.find(
            savedConf =>
              savedConf.atConferenceId === conf.providerId &&
              savedConf.action === 'saved'
          )
          conf.isHidden = !!saved.data.items.find(
            savedConf =>
              savedConf.atConferenceId === conf.providerId &&
              savedConf.action === 'hidden'
          )

          const trackedUserConf = saved.data.items.find(
            savedConf =>
              savedConf.atConferenceId === conf.providerId &&
              savedConf.action === 'tracked'
          )
          if (trackedUserConf) {
            conf.isTracked = true
            conf.trackingStatus = trackedUserConf.meta.trackingStatus
          }

          return conf
        })
        .filter(c => !c.isHidden)
    }

    return (
      <Conferences
        location={this.props.location}
        title={title}
        enableFilters={true}
        categories={categories}
        query={query}
        conferenceListFunction={conferenceListFunction}
      />
    )
  }
}

export default All

export const pageQuery = graphql`
  query AllCategoriesQuery {
    category: allAirtable(filter: { table: { eq: "categories" } }) {
      edges {
        node {
          id
          data {
            name
            description
          }
        }
      }
    }
  }
`
