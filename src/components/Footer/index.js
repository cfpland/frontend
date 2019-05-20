import React from 'react'
import './style.scss'

const Footer = () => (
  <div className="footer">
    <div className="container-fluid text-center d-none d-md-block">
      <p className="social">
        <a href="https://twitter.com/cfp_land">
          <i className="fa fa-twitter" />
        </a>
        <a href="https://www.facebook.com/cfpland">
          <i className="fa fa-facebook" />
        </a>
        <a href="https://www.linkedin.com/company/cfpland/">
          <i className="fa fa-linkedin" />
        </a>
      </p>
      <p>
        © 2019,{' '}
        <a href="https://www.portablecto.com" target="_blank">
          Portable CTO, LLC
        </a>{' '}
        | <a href="mailto:info@cfpland.com">info@cfpland.com</a> |{' '}
        <a href="https://www.portablecto.com/privacy">Privacy Policy</a> |{' '}
        <a href="/blog/data/">Data Sources & Sharing</a> |{' '}
        <a href="/archive/">Conference Archive</a>
      </p>
      <p>
        <a href="https://pro.cfpland.com/?utm_source=web&utm_campaign=footer">
          CFP Land Premium
        </a>{' '}
        | <a href="https://sponsor.cfpland.com/">Sponsor CFP Land</a>
      </p>
    </div>
  </div>
)

export default Footer
