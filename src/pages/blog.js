import { graphql, Link } from "gatsby"
import React, { useState } from "react"
import Layout from "../components/Layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const Blog = ({ data, location }) => {
  const { defaultTitle } = useSiteMetadata()

  const currentPage = ["About", "Blog"].find(element =>
    location.pathname.includes(element.toLowerCase(), 1)
  )

  const posts = data.allGhostPost.edges

  const tags = Array.from(
    new Set(
      posts
        .map(post => post.node.tags.map(tag => tag.name))
        .reduce((prev, curr) => prev.concat(curr))
    )
  )

  const [filteredTags, setFilteredTags] = useState({
    selectedTags: [],
    unselectedTags: [...tags],
  })
  const { selectedTags, unselectedTags } = filteredTags

  const updateFiltedTags = e => {
    const { name } = e.target

    if (name === "All") {
      setFilteredTags({
        selectedTags: [],
        unselectedTags: [...tags],
      })
    } else {
      if (!selectedTags.includes(name)) {
        setFilteredTags({
          selectedTags: [...selectedTags, name],
          unselectedTags: unselectedTags.filter(tag => tag !== name),
        })
      } else {
        setFilteredTags({
          selectedTags: selectedTags.filter(tag => tag !== name),
          unselectedTags: [...unselectedTags, name],
        })
      }
    }
  }

  const filteredPosts = posts.filter(post =>
    post.node.tags
      .map(tag => tag.name)
      .some(tag => {
        if (selectedTags.length === 0) {
          return true
        } else {
          return selectedTags.includes(tag)
        }
      })
  )

  return (
    <Layout location={location} title={defaultTitle} seoTitle={currentPage}>
      <div className="grid justify-center items-center gap-3 m-auto pt-12 pb-24">
        <h1 className="m-0 text-7xl tablet:text-8xl laptop:text-9xl font-bold text-center dark:text-citric">
          {currentPage}
        </h1>
        <ul className="flex justify-center flex-wrap py-4">
          <li
            className={`m-2 p-1 border-default border-black dark:border-citric cursor-pointer ${
              selectedTags.length === 0
                ? "bg-black text-white dark:bg-citric dark:text-black"
                : "dark:text-citric"
            }`}
          >
            <label className="cursor-pointer">
              <input type="checkbox" name="All" onChange={updateFiltedTags} />
              All
            </label>
          </li>
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`m-2 p-1 border-default border-black dark:border-citric cursor-pointer ${
                selectedTags.includes(tag)
                  ? "bg-black text-white dark:bg-citric dark:text-black"
                  : "dark:text-citric"
              }`}
            >
              <label className="cursor-pointer">
                <input type="checkbox" name={tag} onChange={updateFiltedTags} />
                {tag}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ol className="grid grid-cols-1 gap-y-16">
          {filteredPosts.map(post => {
            const title = post.node.title || post.node.slug
            return (
              <li
                key={post.node.slug}
                className="laptop:col-span-3 tablet:col-span-2 group"
              >
                <Link to={post.node.slug} itemProp="url">
                  <article itemScope itemType="http://schema.org/Article">
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
                    <h2 className="mb-2 text-2xl font-bold group-hover:underline">
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
