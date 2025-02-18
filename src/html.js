import React from 'react'

export default class HTML extends React.Component {
  componentDidMount() {
    const _linkedin_partner_id = '970266'
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []
    window._linkedin_data_partner_ids.push(_linkedin_partner_id)
    ;(function() {
      var s = document.getElementsByTagName('script')[0]
      var b = document.createElement('script')
      b.type = 'text/javascript'
      b.async = true
      b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
      s.parentNode.insertBefore(b, s)
    })()
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="google-site-verification"
            content="AQ5ztTDJeX5_Kg8FLvCnBajoFjNZI9irb4faGm_Nyvw"
          />
          <meta name="theme-color" content="#161925" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          {this.props.headComponents}
          <link
            href="/img/apple-icon-180x180.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
            crossOrigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha256-ZvOgfh+ptkpoa2Y4HkRY28ir89u/+VRyDE7sB7hEEcI="
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"
          />
          <script
            type="text/javascript"
            src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js"
            data-dojo-config="usePlainJson: true, isDebug: false"
            onload="mailchimp()"
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src="https://dc.ads.linkedin.com/collect/?pid=970266&fmt=gif"
            />
          </noscript>
        </body>
      </html>
    )
  }
}
