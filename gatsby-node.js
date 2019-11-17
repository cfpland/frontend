const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')
const PostTemplate = path.resolve('./src/templates/index.js')
const { regions } = require('./src/utilities/regions')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allAirtable(filter: { table: { eq: "categories" } }) {
              edges {
                node {
                  fields {
                    slug
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
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        // Create blog posts & pages.
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

        const pages = items.filter(({ node }) => /page/.test(node.name))
        each(pages, ({ node }) => {
          if (!node.remark) return
          const { name } = path.parse(node.path)
          const PageTemplate = path.resolve(node.path)
          createPage({
            path: name,
            component: PageTemplate,
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
        data.allAirtable.edges.forEach(({ node }) => {
          actions.createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/Category/index.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        })

        // Create Regions Conferences
        regions.forEach(region => {
          actions.createPage({
            path: `regions/${region.slug}`,
            component: path.resolve(`./src/templates/Region/index.js`),
            context: {
              name: region.name,
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
