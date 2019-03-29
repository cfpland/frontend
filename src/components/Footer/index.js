import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container-fluid">
      <hr className="border-primary" />
      <p>{title} | Footer coming soon</p>
    </div>
  </div>
)

export default Footer
