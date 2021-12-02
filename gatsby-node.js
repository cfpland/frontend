const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')
const PostTemplate = path.resolve('./src/templates/index.js')
const BlogCategoryTemplate = path.resolve('src/templates/BlogCategory/index.js')
const { regions } = require('./src/utilities/regions')
const createPaginatedPages = require('gatsby-paginate')
const _ = require('lodash')
const moment = require('moment')

const greaterThanDate = moment().format('YYYY-MM-DD')
const lessThanDate = moment()
  .add(21, 'days')
  .format('YYYY-MM-DD')

const getRelatedConferences = (conference, allConferences) => {
  const conferenceCategory = _.get(conference, 'category.0.data.name')

  return allConferences
    .map(relatedConference => {
      let score = 0

      if (relatedConference.record_id !== conference.record_id) {
        const relatedConferenceCategory = _.get(
          relatedConference,
          'category.0.data.name'
        )
        if (relatedConferenceCategory === conferenceCategory) {
          score += 10
        }
        if (relatedConference.region === conference.region) {
          score += 5
        }
        if (relatedConference.subregion === conference.subregion) {
          score += 5
        }
        if (relatedConference.country === conference.country) {
          score += 5
        }
        relatedConference.score = score
      }

      return relatedConference
    })
    .sort((a, b) => (a.score < b.score ? 1 : -1))
    .filter((relatedConference, i) => i < 4)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            atCategories: allAirtable(filter: { table: { eq: "categories" } }) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
            atConferences: allAirtable(
              filter: { table: { eq: "conferences" } }
            ) {
              edges {
                node {
                  id
                  data {
                    name
                    event_url
                    location
                    event_start_date
                    cfp_due_date
                    cfp_url
                    event_end_date
                    twitter
                    perks_checked
                    region
                    subregion
                    icon {
                      url
                    }
                    country
                    created_date
                    created_days_back
                    cfp_days_until
                    is_new
                    description
                    travel_covered
                    hotel_covered
                    stipend_covered
                    record_id
                    category {
                      id
                      data {
                        name
                        description
                      }
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            }
            allFile(filter: { extension: { regex: "/md|js/" } }, limit: 1000) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    frontmatter {
                      layout
                      path
                    }
                  }
                }
              }
            }
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              filter: { frontmatter: { category: { ne: "Guides" } } }
            ) {
              posts: edges {
                post: node {
                  html
                  frontmatter {
                    layout
                    title
                    path
                    category
                    tags
                    date(formatString: "YYYY/MM/DD")
                    image
                  }
                }
              }
            }
            categoryGroup: allMarkdownRemark(limit: 2000) {
              group(field: frontmatter___category) {
                fieldValue
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        // Create paginated blog list pages
        createPaginatedPages({
          edges: data.allMarkdownRemark.posts,
          createPage: createPage,
          pageTemplate: 'src/templates/BlogList/index.js',
          pageLength: 10,
          pathPrefix: 'blog',
          buildPath: (index, pathPrefix) =>
            index > 1 ? `${pathPrefix}/${index}/` : `/${pathPrefix}/`,
        })

        // Create blog posts
        const items = data.allFile.edges
        const posts = items.filter(({ node }) => /posts/.test(node.name))
        each(posts, ({ node }) => {
          if (!node.remark) return
          const { path } = node.remark.frontmatter
          createPage({
            path,
            component: PostTemplate,
          })
        })

        // Create blog category pages
        const categories = data.categoryGroup.group
        categories.forEach(category => {
          createPage({
            path: `/blog/categories/${_.kebabCase(category.fieldValue)}/`,
            component: BlogCategoryTemplate,
            context: {
              category: category.fieldValue,
            },
          })
        })

        // Create guides
        const guides = items.filter(({ node }) => /guides/.test(node.name))
        each(guides, ({ node }) => {
          if (!node.remark) return
          const { path } = node.remark.frontmatter
          createPage({
            path,
            component: PostTemplate,
          })
        })

        // Create Categories
        data.atCategories.edges.forEach(({ node }) => {
          actions.createPage({
            path: `${node.fields.slug}/`,
            component: path.resolve(`./src/templates/Category/index.js`),
            context: {
              slug: node.fields.slug,
              greaterThanDate,
              lessThanDate,
            },
          })
        })

        // Create Regions Conferences
        regions.forEach(region => {
          actions.createPage({
            path: `regions/${region.slug}/`,
            component: path.resolve(`./src/templates/Region/index.js`),
            context: {
              name: region.name,
              greaterThanDate,
              lessThanDate,
            },
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        context: path.resolve(__dirname, 'src/context'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
        utilities: path.resolve(__dirname, 'src/utilities'),
      },
    },
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  // You can access the variable "house" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      greaterThanDate,
      lessThanDate,
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'Airtable' && node.table === 'categories') {
    actions.createNodeField({
      node,
      name: 'slug',
      value: `conferences/${node.data.name.toLowerCase()}`,
    })
  }
}

const { createFilePath } = require(`gatsby-source-filesystem`)
