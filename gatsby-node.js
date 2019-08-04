const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const value = createFilePath({ node, getNode })

    const parent = fileNode.sourceInstanceName
    // let basePath = parent === `blog` ? `blog` : `projects`

    const blog = "blog"
    const projects = "projects"
    const logs = "logs"

    let basePath
    switch (parent) {
      case blog:
        basePath = blog
        break
      case projects:
        basePath = projects
        break
      case logs:
        basePath = logs
        break
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${basePath}${value}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    console.log(JSON.stringify(result, null, 4))

    if (result.errors) {
      throw result.errors
    }

    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const projectPost = path.resolve(`./src/templates/project-post.js`)
    const logPost = path.resolve(`./src/templates/log-post.js`)

    // Create blog, project and log posts.
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach((post, index) => {
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node
      // const next = index === 0 ? null : posts[index - 1].node

      const slug = post.node.fields.slug
      let path = ""
      if (/^\/blog/.test(slug)) {
        path = blogPost
      } else if (/^\/projects/.test(slug)) {
        path = projectPost
      } else if (/^\/logs/.test(slug)) {
        path = logPost
      }

      createPage({
        path: `${slug}`,
        component: path,
        context: {
          slug,
          // previous,
          // next,
        },
      })
    })

    return null
  })
}
