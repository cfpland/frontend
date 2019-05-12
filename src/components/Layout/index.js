import React from 'react'
import emergence from 'emergence.js'
import GlobalAlert from 'components/GlobalAlert'
import Navi from 'components/Navi'
import BottomNav from 'components/BottomNav'
import Footer from 'components/Footer'
import { siteMetadata } from '../../../gatsby-config'
import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Navi title={siteMetadata.title} {...this.props} />
        <GlobalAlert {...this.props} />
        {children}
        <BottomNav {...this.props} />
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    )
  }
}

export default Layout
