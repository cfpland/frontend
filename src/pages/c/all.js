import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import Meta from 'components/Meta'
import { siteMetadata } from '../../../gatsby-config'
import ConferenceListHeader from 'components/ConferenceListHeader'
import SavedTypesNav from 'components/SavedTypesNav'
import ConferenceListNav from 'components/ConferenceListNav'
import { regions } from '../../utilities/regions'
import { queryOptionsSet } from '../../utilities/queryOptionsSet'
import SaveSearch from 'components/SaveSearch'
import ConferenceList from 'components/ConferenceList'
import NoneFoundCard from 'components/NoneFoundCard'
import LoadingCard from 'components/LoadingCard'
import SubmitCfpCta from 'components/SubmitCfpCta'
import Layout from 'components/Layout'
import { withAuthentication } from '../../context/withAuthentication'
import { withOpenConferences } from '../../context/withOpenConferences'
import { filterByQuery } from '../../utilities/filter-conferences'

class All extends React.Component {
  render = () => {
    const { data, location, auth } = this.props
    const title = 'All Upcoming CFPs'
    const categories = get(data, 'category.edges')
    const query = queryString.parse(this.props.location.search)
    const conferences =
      this.props.conferences && this.props.conferences.data
        ? filterByQuery(this.props.conferences.data, query, categories, regions)
        : null

    return (
      <Layout location={location} auth={auth}>
        <Meta site={siteMetadata} title={title} />
        <div id="cfps" className="container mt-2 mt-md-5">
          <ConferenceListHeader
            title={title}
            follow={false}
            definition={false}
          />
          <SavedTypesNav location={location} />
          {categories ? (
            <ConferenceListNav
              location={location}
              categories={categories}
              regions={regions}
            />
          ) : (
            ''
          )}
          {queryOptionsSet(query) ? <SaveSearch query={query} /> : ''}
          {conferences && conferences.length > 0 ? (
            <ConferenceList conferences={conferences} auth={auth} />
          ) : conferences && conferences.length === 0 ? (
            <NoneFoundCard />
          ) : (
            <LoadingCard />
          )}
        </div>
        <div className="container mt-2">
          <SubmitCfpCta />
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(withOpenConferences(All))

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
