import DarkThemeToggle from "components/DarkThemeToggle"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"
import useWindowSize from "hooks/useWindowSize"
import React, { useEffect, useState } from "react"

interface Props {
  title: string | undefined
  isInvisible: boolean
}

const Header = ({ title, isInvisible }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const isMobileSize = useWindowSize().width <= 834

  useEffect(() => {
    if (isMobileSize) {
      setIsClicked(false)
    }
  }, [isMobileSize])

  useEffect(() => {
    if (isClicked) {
      document.body.setAttribute("style", "touch-action: none; overflow:")
    } else {
      document.body.removeAttribute("style")
    }
  }, [isClicked])

  const overlayFullScreen = () => {
    setIsClicked(!isClicked)
  }

  return (
    <header
      className={`header-container transition-transform duration-500 ${
        isInvisible ? "-translate-y-28" : "translate-y-0"
      }`}
    >
      <h1 className="z-20">
        <Link to="/">{title}</Link>
      </h1>
      <div className="grid grid-flow-col items-center gap-x-4">
        <DarkThemeToggle />
        <ul className="hidden tablet:grid tablet:grid-flow-col tablet:gap-x-4">
          <li className="hover:text-muted-black">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-muted-black">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <button
          type="button"
          className="block tablet:hidden z-20"
          onClick={overlayFullScreen}
        >
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
      </div>
      <AnimatePresence>
        {isMobileSize && isClicked && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="grid items-center fixed top-0 left-0 w-full h-screen bg-white dark:bg-black z-10"
          >
            <ul className="grid items-center gap-4 px-4">
              <li className="text-4xl font-bold hover:text-muted-black">
                <Link to="/about">About</Link>
              </li>
              <li className="text-4xl font-bold hover:text-muted-black">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
