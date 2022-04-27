import { useEffect, useState } from "react"

interface Scroll {
  x: number
  y: number
}

const useScroll = () => {
  const [scroll, setScroll] = useState<Scroll>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const onScroll = () => {
      setScroll({ x: window.scrollX, y: window.scrollY })
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return scroll
}

export default useScroll
