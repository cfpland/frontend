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
          © {new Date().getFullYear()}, Hughes Domains, LLC |{' '}
          <a href="mailto:info@cfpland.com">info@cfpland.com</a> |{' '}
          <Link to="/terms/">Terms & Privacy</Link> |{' '}
          <Link to="/archive/">Conference Archive</Link>
        </p>
      </div>
    </div>
  )
}

export default Footer
