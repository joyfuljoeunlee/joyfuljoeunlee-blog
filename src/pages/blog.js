import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../helmets/Seo"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const Blog = ({ data, location }) => {
  const posts = data.allGhostPost.edges

  const { defaultTitle } = useSiteMetadata()

  const tags = Array.from(
    new Set(
      posts
        .map(post => post.node.tags.map(tag => tag.name))
        .reduce((prev, curr) => prev.concat(curr))
    )
  )

  const currentPage = ["About", "Blog"].find(element =>
    location.pathname.includes(element.toLowerCase(), 1)
  )

  if (posts.length === 0) {
    return (
      <Layout location={location} title={defaultTitle}>
        <Seo title="Blog" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={defaultTitle} seoTitle={currentPage}>
      <div className="grid justify-center items-center gap-3 m-auto">
        <button className="text-2xl tablet:text-3xl laptop:text-4xl">
          검색하기
        </button>
        <h1 className="m-0 text-7xl tablet:text-8xl laptop:text-9xl font-bold text-center dark:text-citric">
          {currentPage}
        </h1>
        <ul className="flex flex-wrap">
          {tags?.map((tag, index) => (
            <li
              key={index}
              className="m-2 p-1 border-default border-black dark:border-citric dark:text-citric"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ol className="grid grid-cols-1 gap-y-8 laptop:grid-cols-12 laptop:gap-6 tablet:grid-cols-4 tablet:gap-4 tablet:gap-y-8">
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
                            className="mr-2 mb-2 p-1 text-sm font-bold  text-white  bg-black dark:text-black dark:bg-citric"
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
