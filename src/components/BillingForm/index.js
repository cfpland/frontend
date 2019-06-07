import React from 'react'
import './style.scss'
import queryString from 'querystring'
import ApiClient from '../../utilities/api-client'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
const productionFormCode = '2iupzagf59uu'
const localFormCode = '6h2rpgk167vt'
const moonclerkFormCode =
  process.env.NODE_ENV === 'development' ? localFormCode : productionFormCode

class BillingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      managementUrl: null,
    }

    this.apiClient = new ApiClient()
    this.link = 'https://app.moonclerk.com/pay/' + moonclerkFormCode
    this.setUpFromProps(props)
  }

  componentWillReceiveProps = (nextProps, nextContext) => {
    this.setUpFromProps(nextProps)
  }

  render = () => (
    <>
      {this.state.managementUrl ? (
        <div className="mt-3 mb-4">
          <p>
            Payments are securely managed by Moonclerk and Stripe. To change
            your credit card on file, click the button below.
          </p>
          <p className="text-center">
            <OutboundLink
              target="_blank"
              className="btn btn-secondary"
              href={this.state.managementUrl}
            >
              Update Your Payment Method in Moonclerk
            </OutboundLink>
          </p>
        </div>
      ) : (
        <div id="mc6h2rpgk167vt">
          <p>
            <a href={this.link}>CFP Land Professional</a>
          </p>
        </div>
      )}
    </>
  )

  setUpFromProps = props => {
    if (props && props.auth && props.auth.user) {
      if (props.auth.user.accountLevel === 'pro') {
        this.apiClient
          .getMePayment()
          .then(res => {
            this.setState({
              ...this.state,
              managementUrl: res.data.management_url,
            })
          })
          .catch(e => console.error(e))
      } else {
        // Loads up the Moonclerk form
        var mc6h2rpgk167vt
        ;(function(d, t) {
          var s = d.createElement(t),
            opts = {
              checkoutToken: moonclerkFormCode,
              width: '100%',
              cid: props.auth.user.id,
              email: encodeURIComponent(props.auth.user.email),
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

        const query = {
          cid: props.auth.user.id,
          email: props.auth.user.email,
        }
        this.link += queryString.stringify(query)
      }
    }
  }
}

export default BillingForm
