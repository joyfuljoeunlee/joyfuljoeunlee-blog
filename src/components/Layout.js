import React from "react"
import DarkThemeScript from "../helmets/DarkThemeScript"
import Seo from "../helmets/Seo"
import Header from "./Header"

const Layout = ({ location, title, seoTitle, seoDescription, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div>
      <Seo title={seoTitle} description={seoDescription} />
      <DarkThemeScript />
      <Header title={title} />
      <main className="main-container">{children}</main>
    </div>
  )
}

export default Layout
