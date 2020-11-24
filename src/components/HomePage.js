import React from "react"
import styled from "styled-components"

import homeBackground from "../assets/cta-photo.png"

const HomeContainer = styled.div`
  background: url(${homeBackground}) no-repeat center center;
  background-size: cover;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #faf9f9;

  .text-container {
    margin-right: 25rem;

    h1 {
      font-size: 3.5rem;
      padding-bottom: 2rem;
      text-shadow: 2px 2px 3px #131112;
    }

    h3 {
      font-size: 2.2rem;
      text-shadow: 2px 2px 3px #131112;
    }
  }
`

const HomePage = () => {
  return (
    <HomeContainer>
      <div className="text-container">
        <h1>Brandon Franks</h1>
        <h3>Front End Web Developer</h3>
      </div>
    </HomeContainer>
  )
}

export default HomePage
