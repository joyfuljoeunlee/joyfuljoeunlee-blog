import { graphql, navigate } from "gatsby"
import React, { useEffect } from "react"
import About from "./about"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  useEffect(() => {
    navigate("/about", { replace: true })
  }, [])

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
