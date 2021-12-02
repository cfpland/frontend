import { Link } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import map from 'lodash/map'
import kebabCase from 'lodash/kebabCase'
import './style.scss'

const Post = ({ data, options }) => {
  const { category, tags, title, path, date, image } = data.frontmatter
  const { isIndex } = options
  const html = get(data, 'html')
  const isMore = isIndex && !!html.match('<!--more-->')

  return (
    <div className="article pr-2 pl-2 pr-md-4 pl-md-4" key={path}>
      <div className="info">
        <Link style={{ boxShadow: 'none' }} to={path}>
          {isIndex ? <h2>{title}</h2> : <h1>{title}</h1>}
        </Link>
        {isIndex ? (
          ''
        ) : (
          <span>
            <div className="author-image">
              <img src="https://en.gravatar.com/userimage/18117378/11f7203d702151edd88a9e12cec12f92.jpeg" />
            </div>
            <div className="author">By Karl Hughes</div>
          </span>
        )}
        <time dateTime={date}>{date}</time>
        {Categories({ items: [category] })}
        {Tags({ items: tags })}
      </div>
      <div
        className={isIndex ? 'list-content' : 'content'}
        dangerouslySetInnerHTML={{
          __html: isMore ? getDescription(html) : html,
        }}
      />
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

const Tags = ({ items }) =>
  map(items, (item, i) => {
    return (
      <span className={`badge badge-primary`} key={i}>
        {item}
      </span>
    )
  })

const Categories = ({ items }) =>
  map(items, (item, i) => {
    return (
      <a
        href={`/blog/categories/${kebabCase(item)}/`}
        className={`badge badge-secondary`}
        key={i}
      >
        {item}
      </a>
    )
  })
