import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import NavLink from "../components/navLinks"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class LogPostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const post = data.markdownRemark

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h2>{post.frontmatter.title}</h2>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
            alignSelf: `flex-start`,
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <NavLink />
      </Layout>
    )
  }
}

export default LogPostTemplate

export const pageQuery = graphql`
  query LogPostBySlug($slug: String!) {
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
        date(formatString: "D MMMM YYYY")
      }
    }
  }
`
