import Layout from "components/Layout"
import ScrollProgressBar from "components/ScrollProgressBar"
import { graphql } from "gatsby"
import useSiteMetadata from "hooks/useSiteMetadata"
import Prism from "prismjs"
import React, { useEffect, useState } from "react"

type DataProps = {
  ghostPost: {
    id: string
    title: string
    excerpt: string
    published_at_pretty: string
    html: any
  }
}

interface Props {
  data: DataProps
  location: Location
}

const BlogPostTemplate = ({ data, location }: Props) => {
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

  console.log(tocLists)

  return (
    <Layout
      location={location}
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
              <p className="mt-16 mb-6 text-2xl font-bold laptop:mt-24 tablet:mt-20 laptop:mb-8 tablet:mb-7 laptop:text-3xl">
                목차
              </p>
              <ul>
                {tocLists?.map((list, index) => {
                  const tocList = list.innerHTML
                  const id = list.id
                  return (
                    <li
                      key={index}
                      className="text-lg text-pink dark:text-citric"
                    >
                      <a href={`#${id}`}>{tocList}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
            <section
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
        </div>
        <div className="hidden laptop:block laptop:sticky laptop:top-28 laptop:self-start laptop:min-w-fit">
          <p className="mt-16 mb-6 text-2xl font-bold laptop:mt-24 tablet:mt-20 laptop:mb-8 tablet:mb-7 laptop:text-3xl">
            목차
          </p>
          <ul>
            {tocLists?.map((list, index) => {
              const tocList = list.innerHTML
              const id = list.id
              return (
                <li key={index} className="text-lg text-pink dark:text-citric">
                  <a href={`#${id}`}>{tocList}</a>
                </li>
              )
            })}
          </ul>
        </div>
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
