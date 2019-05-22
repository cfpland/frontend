import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import ApiClient from '../../utilities/api-client'
import NoneFoundCard from '../../components/NoneFoundCard'

class Searches extends React.Component {
  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      searches: null,
    }
    this.apiClient = new ApiClient()
  }

  componentDidMount = () => {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render = () => {
    const { location } = this.props
    const title = 'Your Saved Searches'

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title={title} />
        <div id="cfps" className="container mt-2 mt-md-5">
          <NoneFoundCard />
        </div>
      </Layout>
    )
  }
}

export default Searches
