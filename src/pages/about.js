import React from "react"
import { graphql } from "gatsby"
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
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={data.site.siteMetadata.author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
          }}
        />
      )
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>About</h1>
        <div className="about-intro">
          <div>
            <p>Hi, my name is Jenssen Lee Kang Yuan!</p>
            <p>
              I'm a Software Engineer in Singapore who has been programming for
              over a year and just graduated from ThoughtWorks Jumpstart, a 3
              months coding bootcamp.
            </p>
          </div>
          <header>{header(data)}</header>
        </div>
        <p>
          I code because software is eating the world and I want to partake in
          it. I enjoy solving problems and working with individuals dedicated to
          their craft.
        </p>
        <p>
          You can contact me at&nbsp;
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
        fixed(width: 130, height: 130) {
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
