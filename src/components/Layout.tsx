import Header from "components/Header"
import DarkThemeScript from "helmets/DarkThemeScript"
import Seo from "helmets/Seo"
import useScroll from "hooks/useScroll"
import React, { useEffect, useState } from "react"

interface Props {
  title?: string | undefined
  seoTitle?: string | undefined
  seoDescription?: string
  children?: React.ReactNode
}

const Layout = ({ title, seoTitle, seoDescription, children }: Props) => {
  const [isInvisible, setIsInvisible] = useState<boolean>(false)
  let { y: lastScrollPos } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      if (currentScrollPos > 112 && currentScrollPos > lastScrollPos) {
        setIsInvisible(true)
      } else if (currentScrollPos < 112 || currentScrollPos < lastScrollPos) {
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
