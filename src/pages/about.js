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
              What motivated me was because software is eating the world and I wanted to be a part of it. 
              My interest lies in problem-solving and writing clean code.
            </p>
          </div>
          <header>{header(data)}</header>
        </div>
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
