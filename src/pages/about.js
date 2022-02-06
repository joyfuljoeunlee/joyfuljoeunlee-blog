import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return <Layout location={location} title={siteTitle}></Layout>
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
