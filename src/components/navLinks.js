import React from "react"
import { Link } from "gatsby"

const NavLinks = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks
