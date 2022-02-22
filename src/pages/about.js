import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const currentPage = ["About", "Blog"].find(element =>
    location.pathname.includes(element.toLowerCase(), 1)
  )

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <div className="grid justify-center items-center gap-3 m-auto">
        <h1 className="m-0 text-7xl tablet:text-8xl laptop:text-9xl font-bold text-center dark:text-citric">
          {currentPage}
        </h1>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
