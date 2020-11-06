import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavContainer = styled.div`
  background: #333;
  font-size: 1.5rem;
  padding: 10px;
  height: 7vh;
  display: flex;
  justify-content: bottom;
  align-items: space-between;
  opacity: 0.8;

  ul {
    display: flex;
    align-items: center;
    margin-left: 50%;

    a {
      text-decoration: none;
      color: #fff;
      padding: 20px;
    }
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </NavContainer>
  )
}

export default Navbar
