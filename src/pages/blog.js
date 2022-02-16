import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allGhostPost.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Home" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <div>
        <ol className="grid laptop:grid-cols-12 laptop:gap-6 tablet:grid-cols-4 tablet:gap-4 tablet:gap-y-8">
          {posts.map(post => {
            const title = post.node.title || post.node.slug
            return (
              <li
                key={post.node.slug}
                className="laptop:col-span-3 tablet:col-span-2"
              >
                <Link to={post.node.slug} itemProp="url">
                  <article itemScope itemType="http://schema.org/Article">
                    <div className="relative w-full h-0 mb-3 pb-[100%]">
                      <picture>
                        <source srcSet={post.node.feature_image} media="all" />
                        <img
                          src={post.node.feature_image}
                          alt={post.node.title}
                          className="absolute w-full h-full object-fill"
                        />
                      </picture>
                    </div>
                    <ol className="flex flex-wrap">
                      {post.node.tags.map(tag => {
                        return (
                          <li
                            key={tag.id}
                            className="mr-2 mb-2 p-1 text-sm font-bold  text-white bg-black"
                          >
                            {tag.name}
                          </li>
                        )
                      })}
                    </ol>
                    <h2 className="mb-2 text-2xl font-bold">
                      <span itemProp="headline">{title}</span>
                    </h2>
                    <small>{post.node.published_at_pretty}</small>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.node.excerpt || post.excerpt,
                        }}
                        itemProp="description"
                        className="text-sm line-clamp-3"
                      />
                    </section>
                  </article>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allGhostPost(sort: { fields: [published_at], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
          feature_image
          tags {
            id
            name
          }
        }
      }
    }
  }
`
