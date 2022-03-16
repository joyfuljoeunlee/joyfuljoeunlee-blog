/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

interface Props {
  title?: string | undefined
  description?: string
}

const Seo = ({ title, description }: Props) => {
  const { defaultTitle, defaultDescription } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    titleTemplate: `%s | ${defaultTitle}`,
    description: description || defaultDescription,
  }

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name="description" content={seo.description} />
    </Helmet>
  )
}

export default Seo
