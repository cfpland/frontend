import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { siteMetadata } from '../../../gatsby-config'
import ConferenceListHeader from 'components/ConferenceListHeader'
import SavedTypesNav from 'components/SavedTypesNav'
import ConferenceList from 'components/ConferenceList'
import NoneFoundCard from 'components/NoneFoundCard'
import LoadingCard from 'components/LoadingCard'
import { withAuthentication } from '../../context/withAuthentication'
import FindMoreConferencesCta from 'components/FindMoreConferencesCta'
import { withTrackedConferences } from '../../context/withTrackedConferences'
import { withAbstracts } from '../../context/withAbstracts'

class Rejected extends React.Component {
  render = () => {
    const { location, auth, abstracts } = this.props
    const title = 'Rejections'
    const conferences =
      this.props.conferences && this.props.conferences.data
        ? this.props.conferences.data.filter(
            conference =>
              conference.isTracked && conference.trackingStatus === 'rejected'
          )
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
          <SavedTypesNav location={location} auth={auth} />
          {conferences && conferences.length > 0 ? (
            <ConferenceList
              conferences={conferences}
              auth={auth}
              abstracts={abstracts}
            />
          ) : conferences && conferences.length === 0 ? (
            <NoneFoundCard />
          ) : (
            <LoadingCard />
          )}
        </div>
        <div className="container mt-2">
          <FindMoreConferencesCta auth={auth} />
        </div>
      </Layout>
    )
  }
}

export default withAuthentication(
  withAbstracts(withTrackedConferences(Rejected))
)
