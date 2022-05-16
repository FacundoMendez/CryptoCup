import React from 'react'
import Home from "./header/home/Home"
import Main from "./main/Main"
import NavHeader from './header/nav/NavHeader'

const HomePrincipal = () => {
  return (
    <div>
        <NavHeader />
        <Home/>
        <Main/>
    </div>
  )
}

export default HomePrincipal


