import { Link } from "gatsby"
import React, { useState } from "react"

const Layout = ({ location, title, children }) => {
  const [isClicked, setIsClicked] = useState(false)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const overlayFullScreen = () => {
    setIsClicked(!isClicked)
  }

  if (isRootPath) {
    header = (
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = <Link to="/">{title}</Link>
  }

  return (
    <div data-is-root-path={isRootPath}>
      <header className="flex justify-between items-center h-28">
        {header}
        <ul className="hidden sm:grid sm:grid-flow-col sm:gap-x-4">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <button className="sm:hidden" onClick={overlayFullScreen}>
          <span className="block w-7 h-0.5 my-1.5 bg-black" />
          <span className="block w-7 h-0.5 my-1.5 bg-black" />
          <span className="block w-7 h-0.5 my-1.5 bg-black" />
        </button>
        {isClicked && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white">
            <ul className="grid grid-flow-row">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
            <button onClick={overlayFullScreen}>
              <span className="block w-7 h-0.5 my-1.5 bg-black rotate-45" />
              <span className="block w-7 h-0.5 my-1.5 bg-black -rotate-45" />
            </button>
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
