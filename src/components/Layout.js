import React, { useEffect, useState } from "react"
import DarkThemeScript from "../helmets/DarkThemeScript"
import Seo from "../helmets/Seo"
import useScroll from "../hooks/useScroll"
import Header from "./Header"

const Layout = ({ location, title, seoTitle, seoDescription, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [isInvisible, setIsInvisible] = useState(false)
  let { y: lastScrollPos } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      if (currentScrollPos > lastScrollPos) {
        setIsInvisible(true)
      } else {
        setIsInvisible(false)
      }
      lastScrollPos = currentScrollPos
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Seo title={seoTitle} description={seoDescription} />
      <DarkThemeScript />
      <Header title={title} isInvisible={isInvisible} />
      <main className="main-container">{children}</main>
    </>
  )
}

export default Layout
