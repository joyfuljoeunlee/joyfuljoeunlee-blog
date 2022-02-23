import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import ScrollProgressBar from "../components/ScrollProgressBar"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.ghostPost
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.title} description={post.excerpt} />
      <ScrollProgressBar />
      <article itemScope itemType="http://schema.org/Article">
        <header className="grid gap-9 pt-12 pb-24 text-center">
          <h1 className="text-6xl font-bold" itemProp="headline">
            {post.title}
          </h1>
          <p>{post.published_at_pretty}</p>
        </header>
        <section
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
