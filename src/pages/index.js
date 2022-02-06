import { graphql } from "gatsby"
import * as React from "react"
import About from "./about"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return <About data={data} location={location} title={siteTitle} />
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
