import { graphql, StaticQuery } from "gatsby"
import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Layout from "../Layout"
import ScrollProgressBar from "../ScrollProgressBar"

const BlogPostTemplate = ({ location }) => {
  const { defaultTitle } = useSiteMetadata()

  return (
    <StaticQuery
      query={graphql`
        query {
          ghostPost {
            title
            slug
            excerpt
            published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
            html
          }
        }
      `}
      render={data => (
        <Layout
          location={location}
          title={defaultTitle}
          seoTitle={data.ghostPost.title}
          seoDescription={data.ghostPost.excerpt}
        >
          <ScrollProgressBar />
          <article>
            <header className="grid gap-9 pt-12 pb-24 text-center">
              <h1 className="text-6xl font-bold">{data.ghostPost.title}</h1>
              <p>{data.ghostPost.published_at_pretty}</p>
            </header>
            <section
              className="post-content"
              dangerouslySetInnerHTML={{ __html: data.ghostPost.html }}
            />
          </article>
        </Layout>
      )}
    />
  )
}

export default BlogPostTemplate
