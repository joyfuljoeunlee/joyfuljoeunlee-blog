import { navigate } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/Layout"

const Index = ({ data, location }) => {
  useEffect(() => {
    navigate("/about", { replace: true })
  }, [])

  return <Layout location={location}></Layout>
}

export default Index
