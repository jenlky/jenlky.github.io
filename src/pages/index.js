import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    console.log("data", data)

    return (
      <Layout location={data.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1 className="home-name">Jenssen Lee</h1>
        <p className="home-job-title">Software Engineer</p>
        <p>My name is Jenssen Lee or @jenlky on the internet.</p>
        <p>
          I'm a Software Engineer in Singapore.{" "}
          <sup className="home-hire">(Available for hire!)</sup>
        </p>
        <p>
          This site contains my essays on technology, software development and
          whatever is on my mind at the moment. The projects page holds a
          portfolio of my prior projects.
        </p>
        <h3 className="recent-essays">Recent Essays</h3>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="essays" key={node.fields.slug}>
              <h3
                style={{
                  margin: 0,
                }}
              >
                <Link className="essays-uri" to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </div>
          )
        })}
        <div className="view-archived-wrapper">
          <Link to="/blog" className="view-archived">
            View All {data.allMarkdownRemark.totalCount} Essays
          </Link>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^/blog/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "Do MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
