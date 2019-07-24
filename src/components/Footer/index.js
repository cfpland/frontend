import React from 'react'
import './style.scss'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from 'gatsby'

class Footer extends React.Component {
  componentWillReceiveProps(nextProps, nextContext) {
    if ($) {
      $(function() {
        $('[data-toggle="tooltip"]').tooltip()
      })
    }
    if (nextProps && nextProps.auth && nextProps.auth.user && window.ga) {
      window.ga('set', 'userId', nextProps.auth.user.id) // Set the user ID using signed-in user_id.
    }
    if (
      nextProps.auth &&
      !nextProps.auth.isAuthenticated &&
      window.dojoRequire
    ) {
      window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
        L.start({
          baseUrl: 'mc.us15.list-manage.com',
          uuid: '4eba8b205fc13380cd3e6f3fc',
          lid: '258f553f4e',
          uniqueMethods: true,
        })
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
          © 2019, Portable CTO, LLC |{' '}
          <a href="mailto:info@cfpland.com">info@cfpland.com</a> |{' '}
          <Link to="/terms/">Terms & Privacy</Link> |{' '}
          <Link to="/blog/data/">Data Sources & Sharing</Link> |{' '}
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
