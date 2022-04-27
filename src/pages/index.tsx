import Layout from "components/Layout"
import { navigate } from "gatsby"
import React, { useEffect } from "react"

const Index = () => {
  useEffect(() => {
    navigate("/about", { replace: true })
  }, [])

  return <Layout></Layout>
}

export default Index
