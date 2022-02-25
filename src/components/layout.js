import React from "react"
import DarkThemeToggle from "./DarkThemeToggle"
import Header from "./Header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <Header title={title} />
      <div className="fixed top-1/2 left-0">
        <DarkThemeToggle />
      </div>
      <main className="main-container">{children}</main>
    </div>
  )
}

export default Layout
