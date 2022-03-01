import { useEffect, useState } from "react"

const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0, // x와 y의 초기값을 0으로 지정
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
