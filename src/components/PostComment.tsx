import React, { RefObject, useEffect, useRef } from "react"

const utterancesSettings = {
  src: "https://utteranc.es/client.js",
  repo: "joyfuljoeunlee/joyfuljoeunlee-blog",
  "issue-term": "pathname",
  label: "blog-comments",
  theme: "preferred-color-scheme",
  crossorigin: "anonymous",
  async: "true",
}

const PostComment = () => {
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    if (document.querySelector(".utterances")) return
    const utterances = document.createElement("script")

    Object.entries(utterancesSettings).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    ref.current.appendChild(utterances)
  }, [])

  return (
    <div className="pt-10">
      <div ref={ref}></div>
    </div>
  )
}

export default PostComment
