import React from "react"
import DarkThemeScript from "../helmets/DarkThemeScript"
import Seo from "../helmets/Seo"
import DarkThemeToggle from "./DarkThemeToggle"
import Header from "./Header"

const Layout = ({ location, title, seoTitle, seoDescription, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div>
      <Seo title={seoTitle} description={seoDescription} />
      <DarkThemeScript />
      <Header title={title} />
      <div className="fixed top-1/2 left-0">
        <DarkThemeToggle />
      </div>
      <main className="main-container">{children}</main>
    </div>
  )
}

export default Layout
