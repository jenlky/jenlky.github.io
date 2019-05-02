import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavLinks from "../components/navLinks"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Projects</h1>
        <ul>
          <li>
            <p>
              <a href="https://jenlky-shopping-cart.herokuapp.com/">ShopLah</a> - 
              Retrieves and displays products from Express API. Users must log in to add, remove products and change item quantity. 
              When user logins, retrieve added products from database. Limits access to cart, profile and checkout page to logged in users. 
              Displays and tallies the total quantity and price.
            </p>
          </li>
          <li>
            <p>
              <a href="https://shrouded-taiga-52624.herokuapp.com/">Flashcard App</a> -
              Created during Chingu Voyage, a collaborative environment where hundreds of people build projects together to learn. 
              It allows users to create a topic, insert questions and answers. 
              Users can only add card or delete from the topic they created, 
              but they can study all the existing topics (even if they didn't create it).
            </p>
          </li>
          <li>
            <p>
              <a href="https://helplah.github.io/tribute-page/">Tribute Page</a> -
              Built as a tribute to Elon Musk with a timeline of his life. 
              I chose Elon Musk because I admire and respect his tenacity, work ethics and drive towards serial entrepreneurship. 
              Most importantly, I'm impressed and inspired by his motivation for doing all these things - 
              he truly believes in building a better world.
            </p>
          </li>
          <li>
            <p>
              <a href="https://helplah.github.io/twitch-tv/">Twitch TV</a> -
              Tracks twitch streamers and shows what they're streaming if they're online. Allows user to filter based on status.
            </p>
          </li>
          <li>
            <p>
              <a href="https://helplah.github.io/react-wikipedia/">React Wikipedia</a> -
              Searches the typed word at Wikipedia and returns the top 10 results. 
              When you click on any of the results, it directs you to the said result.
            </p>
          </li>
          <li>
            <p>
              <a href="https://helplah.github.io/react-quote-machine/">React Quote Machine</a> -
              Generates a new design quote when it's clicked. Allows user to tweet said quote.
            </p>
          </li>
        </ul>
        <NavLinks />
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`