import React from 'react'
import './style.scss'
import { cleanNullValues } from 'utilities/clean-null-values'
import { statuses } from 'utilities/statuses'
import queryString from 'querystring'

class BillingForm extends React.Component {
  constructor(props) {
    super(props)

    this.link = 'https://app.moonclerk.com/pay/6h2rpgk167vt'
    this.setUpFromProps(props)
  }

  componentWillReceiveProps = (nextProps, nextContext) => {
    this.setUpFromProps(nextProps)
  }

  render = () => (
    <div id="mc6h2rpgk167vt">
      <a href={this.link}>CFP Land Professional</a>
    </div>
  )

  setUpFromProps = props => {
    if (props && props.auth && props.auth.user) {
      // Loads up the Moonclerk form
      var mc6h2rpgk167vt
      ;(function(d, t) {
        var s = d.createElement(t),
          opts = {
            checkoutToken: '6h2rpgk167vt',
            width: '100%',
            email: encodeURIComponent(props.auth.user.email),
            name: encodeURIComponent(
              `${props.auth.user.firstName} ${props.auth.user.lastName}`
            ),
            cid: props.auth.user.id,
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
        email: props.auth.user.email,
        name: `${props.auth.user.firstName} ${props.auth.user.lastName}`,
        cid: props.auth.user.id,
      }
      this.link += queryString.stringify(query)
    }
  }
}

export default BillingForm
