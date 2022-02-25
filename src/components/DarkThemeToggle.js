import React, { useEffect, useState } from "react"

const DarkThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(null)
  const [theme, setTheme] = useState(isDarkTheme ? "다크 모드" : "라이트 모드")

  useEffect(() => {
    if (typeof window === "undefined") {
      return null
    }

    setIsDarkTheme(
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
  }, [])

  const switchTheme = () => {
    if (isDarkTheme) {
      setTheme("라이트 모드")
      setIsDarkTheme(false)
      localStorage.theme = "light"
      document.documentElement.classList.remove("dark")
    } else {
      setTheme("다크 모드")
      setIsDarkTheme(true)
      localStorage.theme = "dark"
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <button
      className="relative w-16 h-16 border-default rounded-full dark:border-white cursor-pointer"
      onClick={switchTheme}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {theme}
      </span>
    </button>
  )
}

export default DarkThemeToggle
