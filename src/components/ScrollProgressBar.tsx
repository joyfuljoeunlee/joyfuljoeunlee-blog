import React, { useEffect, useState } from "react"

const ScrollProgressBar = () => {
  const [scrolled, setScrolled] = useState<number>(0)

  useEffect(() => {
    const trackVerticalScroll = () => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      setScrolled((winScroll / height) * 100)
    }

    window.addEventListener("scroll", trackVerticalScroll)
    return () => {
      window.removeEventListener("scroll", trackVerticalScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-20">
      <div
        style={{ width: `${scrolled}%` }}
        className="absolute top-0 left-0 h-full bg-pink dark:bg-citric"
      ></div>
    </div>
  )
}

export default ScrollProgressBar
