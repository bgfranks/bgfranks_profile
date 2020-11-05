import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact Me</Link>
    </div>
  )
}

export default Navbar
