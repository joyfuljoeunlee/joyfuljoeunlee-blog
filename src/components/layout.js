import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import useWindowSize from "./hooks/useWindowSize"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const [isClicked, setIsClicked] = useState(false)

  const isMobileSize = useWindowSize().width <= 834

  useEffect(() => {
    if (isMobileSize) {
      setIsClicked(false)
    }
  }, [isMobileSize])

  const overlayFullScreen = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div data-is-root-path={isRootPath} className="dark:bg-black">
      <header className="header-container">
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <ul className="hidden tablet:grid tablet:grid-flow-col tablet:gap-x-4">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <button className="block tablet:hidden" onClick={overlayFullScreen}>
          <span
            className={`block w-7 h-0.5 my-1.5 bg-black dark:bg-white ${
              isClicked ? "rotate-45 translate-y-2" : "rotate-0"
            }`}
          />
          <span
            className={`block w-7 h-0.5 my-1.5 bg-black dark:bg-white ${
              isClicked ? "opacity-0" : "opacity-1"
            }`}
          />
          <span
            className={`block w-7 h-0.5 my-1.5 bg-black dark:bg-white ${
              isClicked ? "-rotate-45 -translate-y-2" : "rotate-0"
            }`}
          />
        </button>
      </header>
      <div
        className={`grid items-center fixed top-0 left-0 w-full h-screen bg-white dark:bg-black z-10 transition duration-500 ${
          isMobileSize && isClicked ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="grid items-center gap-4 p-14">
          <li className="text-4xl font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="text-4xl font-bold">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <main className="main-container">{children}</main>
    </div>
  )
}

export default Layout
