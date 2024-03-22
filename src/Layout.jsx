import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

//this is the layout component that will be will be rendered in all the components it is bc of the outlet, a feature of react-router-dom
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout