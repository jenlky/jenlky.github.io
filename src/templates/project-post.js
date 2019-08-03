import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import NavLink from "../components/navLinks"
import SEO from "../components/seo"

class ProjectPostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const post = data.markdownRemark

    return (
      // maybe I can add images to the excerpt/summary of the project
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <NavLink />
      </Layout>
    )
  }
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
      }
    }
  }
`
