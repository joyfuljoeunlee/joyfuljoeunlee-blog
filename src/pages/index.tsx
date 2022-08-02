import Layout from "components/Layout"
import { navigate } from "gatsby"
import React, { useEffect } from "react"

const Index = () => {
  useEffect(() => {
    navigate("/blog", { replace: true })
  }, [])

  return <Layout></Layout>
}

export default Index
