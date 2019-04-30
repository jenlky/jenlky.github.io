import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // const { author } = data.site.siteMetadata
    let header

    {/*
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            // Header: 'Technical Blog' marginBottom
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    } */}
    
    header = (data) => {
      return (
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`
            //marginBottom: rhythm(2.5),
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
        </div>
      );
    }
      
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
                // padding of whole div
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
            >
              <header>{header(data)}</header>
              <main>{children}</main>
              {/* <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer> */}
            </div>
          )
        }}
      />
    );
  }
}

const layoutQuery = graphql`
  query layoutQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Layout
