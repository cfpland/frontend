import { Link } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import map from 'lodash/map'

import './style.scss'
import SubscribeBlog from '../../components/SubscribeBlog'

const Post = ({ data, options }) => {
  const { category, tags, title, path, date, image } = data.frontmatter
  const { isIndex } = options
  const html = get(data, 'html')
  const isMore = isIndex && !!html.match('<!--more-->')

  return (
    <div className="article" key={path}>
      <div className="container">
        <div className="info">
          <Link style={{ boxShadow: 'none' }} to={path}>
            {isIndex ? (
              <h2>{title}</h2>
            ) : (
              <h1 className="display-4">{title}</h1>
            )}
            <time dateTime={date}>{date}</time>
          </Link>
          {Badges({ items: [category] })}
          {Badges({ items: tags, primary: true })}
        </div>
        <div
          className={isIndex ? 'list-content' : 'content'}
          dangerouslySetInnerHTML={{
            __html: isMore ? getDescription(html) : html,
          }}
        />
        {isMore ? <div className="info" /> : SubscribeBlog()}
      </div>
    </div>
  )
}

export default Post

const getDescription = body => {
  body = body.replace(/<blockquote>/g, '<blockquote class="blockquote">')
  if (body.match('<!--more-->')) {
    body = body.split('<!--more-->')
    if (typeof body[0] !== 'undefined') {
      return body[0]
    }
  }
  return body
}

const Badges = ({ items, primary }) =>
  map(items, (item, i) => {
    return (
      <span
        className={`badge ${primary ? 'badge-primary' : 'badge-secondary'}`}
        key={i}
      >
        {item}
      </span>
    )
  })
