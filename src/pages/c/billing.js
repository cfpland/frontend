import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Auth from 'utilities/auth'
import * as jwt_decode from 'jwt-decode'

class Communication extends React.Component {
  constructor(props) {
    super(props)
    this.auth = new Auth()
  }
  componentDidMount() {
    const user = jwt_decode(this.auth.getIdToken())

    // Loads up the Moonclerk form
    var mc6h2rpgk167vt
    ;(function(d, t) {
      var s = d.createElement(t),
        opts = {
          checkoutToken: '6h2rpgk167vt',
          width: '100%',
          email: user.email,
        }
      s.src = 'https://d2l7e0y6ygya2s.cloudfront.net/assets/embed.js'
      s.onload = s.onreadystatechange = function() {
        var rs = this.readyState
        if (rs) if (rs != 'complete') if (rs != 'loaded') return
        try {
          mc6h2rpgk167vt = new MoonclerkEmbed(opts)
          mc6h2rpgk167vt.display()
        } catch (e) {}
      }
      var scr = d.getElementsByTagName(t)[0]
      scr.parentNode.insertBefore(s, scr)
    })(document, 'script')
  }

  render = () => {
    const link =
      'https://app.moonclerk.com/pay/6h2rpgk167vt?email=khughes.me@gmail.com&name=karl%20hughes'
    const { location } = this.props
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Your Account" />
        <div className="container mt-3">
          <div className="account-page">
            {this.auth.isAuthenticated() ? (
              <React.Fragment>
                <h1>Billing Information</h1>

                <div id="mc6h2rpgk167vt">
                  <a href={link}>CFP Land Professional</a>
                </div>

                <p className="small cancel">
                  Need to cancel your account or change your email address?
                  Email{' '}
                  <a
                    className="text-danger"
                    href="mailto:info@cfpland.com"
                    target="_blank"
                  >
                    info@cfpland.com
                  </a>
                  .
                </p>
              </React.Fragment>
            ) : (
              ''
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Communication
