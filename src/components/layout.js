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
            <div
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)} 0`, // 42px 21px 0
              }}
            >
              <main>{children}</main>
            </div>
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
