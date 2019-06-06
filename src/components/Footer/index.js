import React from 'react'
import './style.scss'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from 'gatsby'

class Footer extends React.Component {
  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps && nextProps.auth && nextProps.auth.user && window.ga) {
      window.ga('set', 'userId', nextProps.auth.user) // Set the user ID using signed-in user_id.
    }
    if ($) {
      $(function() {
        $('[data-toggle="tooltip"]').tooltip()
      })
    }
  }

  render = () => (
    <div className="footer">
      <div className="container-fluid text-center d-none d-md-block">
        <p className="social">
          <OutboundLink href="https://twitter.com/cfp_land">
            <i className="fa fa-twitter" />
          </OutboundLink>
          <OutboundLink href="https://www.facebook.com/cfpland">
            <i className="fa fa-facebook" />
          </OutboundLink>
          <OutboundLink href="https://www.linkedin.com/company/cfpland/">
            <i className="fa fa-linkedin" />
          </OutboundLink>
        </p>
        <p>
          © 2019,{' '}
          <OutboundLink href="https://www.portablecto.com" target="_blank">
            Portable CTO, LLC
          </OutboundLink>{' '}
          | <a href="mailto:info@cfpland.com">info@cfpland.com</a> |{' '}
          <OutboundLink href="https://www.portablecto.com/privacy">
            Privacy Policy
          </OutboundLink>{' '}
          | <Link to="/blog/data/">Data Sources & Sharing</Link> |{' '}
          <Link to="/archive/">Conference Archive</Link>
        </p>
        <p>
          <OutboundLink href="https://pro.cfpland.com/?utm_source=web&utm_campaign=footer">
            CFP Land Pro
          </OutboundLink>{' '}
          |{' '}
          <OutboundLink href="https://sponsor.cfpland.com/">
            Sponsor CFP Land
          </OutboundLink>
        </p>
      </div>
    </div>
  )
}

export default Footer
