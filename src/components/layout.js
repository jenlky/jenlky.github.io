import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import "./global.css"
import NavLinks from "../components/navLinks"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    console.log("children", children)

    return (
      <StaticQuery
        query={layoutQuery}
        render={data => {
          return (
            <main
              style={{
                margin: `${rhythm(1.3)} ${rhythm(1)}`,
              }}
              className="main"
            >
              <div className="content">{children}</div>
              <NavLinks />
            </main>
          )
        }}
      />
    )
  }
}

const layoutQuery = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Layout
