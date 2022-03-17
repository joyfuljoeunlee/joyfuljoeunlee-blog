import React, { useEffect, useState } from "react"

const DarkThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null)

  useEffect(() => {
    setIsDarkTheme(
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
  }, [])

  const switchTheme = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false)
      localStorage.theme = "light"
      document.documentElement.classList.remove("dark")
    } else {
      setIsDarkTheme(true)
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
        {isDarkTheme ? "DARK" : "LIGHT"}
      </span>
    </button>
  )
}

export default DarkThemeToggle
