import React, { useEffect, useState } from "react"

const DarkThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(null)
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setIsDarkTheme(
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
  }, [])

  useEffect(() => {
    setTheme(isDarkTheme ? "DARK" : "LIGHT")
  }, [isDarkTheme])

  const switchTheme = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false)
      setTheme("LIGHT")
      localStorage.theme = "light"
      document.documentElement.classList.remove("dark")
    } else {
      setIsDarkTheme(true)
      setTheme("DARK")
      localStorage.theme = "dark"
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <button
      type="button"
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
