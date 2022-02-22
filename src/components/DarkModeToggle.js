import React, { useEffect, useState } from "react"

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(null)
  const [theme, setTheme] = useState(isDarkMode ? "다크 모드" : "라이트 모드")

  const switchTheme = () => {
    if (isDarkMode) {
      setTheme("라이트 모드")
      setIsDarkMode(false)
      localStorage.theme = "light"
      document.documentElement.classList.remove("dark")
    } else {
      setTheme("다크 모드")
      setIsDarkMode(true)
      localStorage.theme = "dark"
      document.documentElement.classList.add("dark")
    }
  }

  if (typeof window === "undefined") {
    return null
  }

  useEffect(() => {
    setIsDarkMode(
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
  }, [])

  return (
    <div
      className="relative w-16 h-16 border-default rounded-full dark:border-white cursor-pointer"
      onClick={switchTheme}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {theme}
      </span>
    </div>
  )
}

export default DarkModeToggle
