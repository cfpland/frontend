import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

const Meta = ({ site, title, image }) => {
  image = image ? image : get(site, 'image')
  const siteTitle = get(site, 'title')
  title = title ? `${title} | ${siteTitle}` : siteTitle
  return (
    <Helmet
      title={title}
      meta={[
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: `@${get(site, 'twitter')}`,
        },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: get(site, 'description'),
        },
        {
          property: 'og:url',
          content: get(site, 'siteUrl'),
        },
        {
          property: 'og:image',
          content: image,
        },
      ]}
    />
  )
}
export default Meta
