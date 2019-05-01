import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavLinks from "../components/navLinks"

class BlogIndex extends React.Component {
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
        <p>I am Jenssen Lee Kang Yuan, a Software Engineer in Singapore. 
          I believe that Software is Eating the World...</p> 

        <h3>*Writing in progress*</h3>

        <p>This site is meant to consolidate writings of my experience 
          and lessons learnt from doing tech stuff, 
          and to display any projects I have done.</p>
        <p>
          <span>
            Twitter: <a href="https://twitter.com/Jenlky">@jenlky</a>&nbsp; 
          </span>
          <span>
            Github: <a href="https://github.com/helplah">@helplah</a>&nbsp; 
          </span>
          <span>
            Wordpress: <a href="https://jenlky.wordpress.com/">@jenlky</a>&nbsp; 
          </span>
        </p>
        <p>I'm familiar with HTML, CSS, SASS, BootStrap, JavaScript, jQuery, React, React-Router, Redux, 
          &nbsp;VueJS, Material-UI, Nodejs, MongoDB and git.</p>
        <p>At the time of writing, I'm on week 3 of&nbsp; 
          <a href="https://www.coursera.org/learn/algorithms-part1/home/welcome">Princeton Algorithms</a> 
          (<a href="https://github.com/helplah/princeton-algorithms">Github repo</a>)
          a Coursera MOOC that teaches in Java;
          while waiting to join ThoughtWorks JumpStart, a three months coding bootcamp, in May. 
        </p>
        <NavLinks />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`