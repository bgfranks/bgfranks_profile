import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavContainer = styled.div`
  font-size: 1.2rem;
  padding: 10px;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    margin-left: 100%;

    a {
      text-decoration: none;
      color: #fff;
      padding: 25px;
    }
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <div></div>
      <div>
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
        </ul>
      </div>
    </NavContainer>
  )
}

export default Navbar
