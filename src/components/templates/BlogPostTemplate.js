import { graphql } from "gatsby"
import * as React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Layout from "../Layout"
import ScrollProgressBar from "../ScrollProgressBar"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.ghostPost

  const { defaultTitle } = useSiteMetadata()

  return (
    <Layout
      location={location}
      title={defaultTitle}
      seoTitle={post.title}
      seoDescription={post.excerpt}
    >
      <ScrollProgressBar />
      <article>
        <header className="grid gap-9 pt-12 pb-24 text-center">
          <h1 className="text-6xl font-bold">{post.title}</h1>
          <p>{post.published_at_pretty}</p>
        </header>
        <section
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
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
