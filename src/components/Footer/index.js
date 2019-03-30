import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container-fluid text-center">
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
        |&nbsp;
        <a href="mailto:info@cfpland.com">info@cfpland.com</a> |&nbsp;
        <a href="https://www.portablecto.com/privacy">Privacy Policy</a>
      </p>
    </div>
  </div>
)

export default Footer
