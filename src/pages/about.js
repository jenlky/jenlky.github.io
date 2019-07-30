import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavLinks from "../components/navLinks"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>About</h1>
        <p>
          Hi my name is Jenssen Lee Kang Yuan! I'm a Software Engineer in
          Singapore who had been programming for over a year and just graduated
          from ThoughtWorks Jumpstart, a 3 months coding bootcamp.{" "}
          <sup className="hire"> (Available for hire!)</sup>
        </p>
        <p>
          I choose to code because software is eating the world and I want to
          partake in it. I enjoy solving problems and working with individuals
          dedicated to their craft.
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
        <div className="stack">
          <p>
            <span>Front-end: </span>
            React, React-router, Redux, Material UI, Vue, JavaScript, HTML,
            SCSS, Bootstrap, jQuery
          </p>
          <p>
            <span>Back-end: </span>
            Express, Mongoose, JSON Web Token, PassportJS
          </p>
          <p>
            <span>Testing: </span>
            Jest, React Testing Library, Cypress
          </p>
          <p>
            <span>DevOps: </span>
            CircleCi, Heroku, Netlify
          </p>
          <p>
            <span>Misc: </span>
            Java, Git for version control
          </p>
        </div>
        {/* <p>
          At the time of writing, I'm on week 3 of&nbsp;
          <a href="https://www.coursera.org/learn/algorithms-part1/home/welcome">
            Princeton Algorithms
          </a>
          (
          <a href="https://github.com/helplah/princeton-algorithms">
            Github repo
          </a>
          ) a Coursera MOOC that teaches in Java.
        </p> */}
        <NavLinks />
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
