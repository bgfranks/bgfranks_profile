import React from "react"
import "normalize.css"

import Navbar from "./Navbar"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
