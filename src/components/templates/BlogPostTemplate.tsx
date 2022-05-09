import Layout from "components/Layout"
import PostComment from "components/PostComment"
import ScrollProgressBar from "components/ScrollProgressBar"
import TocLists from "components/TocLists"
import { graphql } from "gatsby"
import useSiteMetadata from "hooks/useSiteMetadata"
import Prism from "prismjs"
import React, { useEffect, useState } from "react"

interface Props {
  data: GhostPost
}

const BlogPostTemplate = ({ data }: Props) => {
  const [tocLists, setTocLists] = useState<HTMLHeadingElement[] | null>(null)
  const post = data.ghostPost
  const { defaultTitle } = useSiteMetadata()

  useEffect(() => {
    setTocLists(
      Object.values(
        new DOMParser()
          .parseFromString(post.html, "text/html")
          .getElementsByTagName("h2")
      )
    )
  }, [])

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Layout
      title={defaultTitle}
      seoTitle={post.title}
      seoDescription={post.excerpt}
    >
      <ScrollProgressBar />
      <div className="flex gap-10">
        <div>
          <article>
            <header className="grid gap-9 pt-12 pb-24 text-center">
              <h1 className="text-6xl font-bold">{post.title}</h1>
              <p>{post.published_at_pretty}</p>
            </header>
            <div className="block laptop:hidden">
              <TocLists tocLists={tocLists} />
            </div>
            <section
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
          <PostComment />
        </div>
        <aside className="hidden laptop:block laptop:sticky laptop:top-28 laptop:self-start laptop:min-w-[20%]">
          <TocLists tocLists={tocLists} />
        </aside>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      title
      slug
      excerpt
      published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
      html
    }
  }
`
