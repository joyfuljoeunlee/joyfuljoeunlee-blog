import Layout from "components/Layout"
import { navigate } from "gatsby"
import React, { useEffect } from "react"

interface Props {
  location: Location
}

const Index = ({ location }: Props) => {
  useEffect(() => {
    navigate("/about", { replace: true })
  }, [])

  return <Layout location={location}></Layout>
}

export default Index
