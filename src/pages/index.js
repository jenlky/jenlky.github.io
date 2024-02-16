import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import NavLinks from "../components/navLinks"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    let header = data => {
      return (
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={data.site.siteMetadata.author}
          style={{
            marginLeft: rhythm(1 / 2),
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
          }}
        />
      )
    }

    return (
      <Layout location={data.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="home-header">
          <div className="home-intro">
            <h1 className="home-name">Jenssen Lee</h1>
            <p className="home-job-title">Software Engineer {" "} <sup className="available-for-hire">(Available for hire)</sup></p>
          </div>
          <NavLinks />
        </div>
        <div className="home-about">
          <div class='home-bio'>
            <p>Hi, my name is Jenssen Lee or my friends call me Jens!</p>
            <p>
              I'm a Singapore-based Software Engineer who has 4 years of working experience. 
              Here's a little bit about myself: I'm an avid runner and I've travelled overseas to run a marathon before.
            </p>
            <p>
              My background is from a fintech SME and my expertise lies in JavaScript.
              I started out learning to code on my own and enrolled in ThoughtWorks Jumpstart, a 3 months coding bootcamp. 
              After that I got a job and the rest is history.
            </p>
            <p>
              My motivation to join the industry was because software is eating the world and I wanted to be a part of it. 
              My interest lies in problem-solving and writing clean code.
            </p>
          </div>
          <header class='home-pic'>{header(data)}</header>
        </div>
        <div class='home-contact'>
          <p>
            You can contact me at&nbsp;
            <span>
              <a href="mailto:jenssen.lee@gmail.com">jenssen.lee@gmail.com</a>
            </span>
            {/* , I&nbsp;
            <span>
              <a href="https://jenlky.wordpress.com/">write</a>
            </span>
            &nbsp;for leisure too. */}
          </p>
          <p className="social-media">
            <span>
              <a href="https://github.com/jenlky">Github</a>
            </span>
            {/* <span>
              <a href="https://twitter.com/Jenlky">Twitter</a>
            </span> */}
            <span>
              <a href="https://www.linkedin.com/in/jenlky/">LinkedIn</a>
            </span>
          </p>
        </div>
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
    avatar: file(absolutePath: { regex: "/taipei-marathon.png/" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
            date(formatString: "DD MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
