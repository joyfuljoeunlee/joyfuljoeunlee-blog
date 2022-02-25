import * as React from "react"
import Layout from "../components/Layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const NotFoundPage = ({ location }) => {
  const { defaultTitle } = useSiteMetadata()

  return (
    <Layout location={location} title={defaultTitle} seoTitle="404: Not Found">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
