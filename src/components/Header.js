import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import useWindowSize from "../hooks/useWindowSize"

function Header({ title }) {
  const [isClicked, setIsClicked] = useState(false)

  const isMobileSize = useWindowSize().width <= 834

  useEffect(() => {
    if (isMobileSize) {
      setIsClicked(false)
    }
  }, [isMobileSize])

  useEffect(() => {
    if (isClicked) {
      document.body.setAttribute("style", "overflow-y: hidden")
    } else {
      document.body.removeAttribute("style")
    }
  }, [isClicked])

  const overlayFullScreen = () => {
    setIsClicked(!isClicked)
  }

  return (
    <header className="header-container">
      <h1 className="z-20">
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
      <button className="block tablet:hidden z-20" onClick={overlayFullScreen}>
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
      <div
        className={`grid items-center fixed top-0 left-0 w-full h-screen bg-white dark:bg-black transition-transform duration-500 z-10 ${
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
    </header>
  )
}

export default Header
