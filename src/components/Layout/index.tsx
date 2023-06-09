import React from "react"

import MenuBar from "../MenuBar"
import Main from "../Main"
import Sidebar from "../Sidebar"

import { Container, Wrapper } from "./styles"

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <Sidebar />
      </Wrapper>
    </Container>
  )
}

export default Layout
