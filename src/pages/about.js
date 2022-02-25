import * as React from "react"
import Layout from "../components/Layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const About = ({ data, location }) => {
  const currentPage = ["About", "Blog"].find(element =>
    location.pathname.includes(element.toLowerCase(), 1)
  )

  const { defaultTitle } = useSiteMetadata()

  return (
    <Layout location={location} title={defaultTitle} seoTitle={currentPage}>
      <div className="grid justify-center items-center gap-3 m-auto">
        <h1 className="m-0 text-7xl tablet:text-8xl laptop:text-9xl font-bold text-center dark:text-citric">
          {currentPage}
        </h1>
      </div>
    </Layout>
  )
}

export default About
