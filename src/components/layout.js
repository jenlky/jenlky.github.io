import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import "./global.css"

class Layout extends React.Component {
  render() {
    const { children } = this.props

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
