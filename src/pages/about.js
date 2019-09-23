import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    let header = data => {
      return (
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: `white`,
          }}
          activeStyle={{
            textDecoration: `none`,
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={data.site.siteMetadata.author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </Link>
      )
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>About</h1>
        <div>
          <p>
            Hi my name is Jenssen Lee Kang Yuan! I'm a Software Engineer in
            Singapore who had been programming for over a year and just
            graduated from ThoughtWorks Jumpstart, a 3 months coding bootcamp.{" "}
            <sup className="hire"> (Available for hire!)</sup>
          </p>
          <header>{header(data)}</header>
        </div>
        <p>
          I code because software is eating the world and I want to partake in
          it. I enjoy solving problems and working with individuals dedicated to
          their craft.
        </p>
        <p>
          This site is meant to consolidate my coding/tech experience and
          showcase my prior projects. You can contact me at&nbsp;
          <span>
            <a href="mailto:jenssen.lee@gmail.com">jenssen.lee@gmail.com</a>
          </span>
          , I&nbsp;
          <span>
            <a href="https://jenlky.wordpress.com/">write</a>
          </span>
          &nbsp;for leisure too.
        </p>
        <p className="social-media">
          <span>
            Github: <a href="https://github.com/jenlky">@jenlky</a>
          </span>
          <span>
            Twitter: <a href="https://twitter.com/Jenlky">@jenlky</a>
          </span>
          <span>
            LinkedIn: <a href="https://www.linkedin.com/in/jenlky/">@jenlky</a>
          </span>
        </p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
