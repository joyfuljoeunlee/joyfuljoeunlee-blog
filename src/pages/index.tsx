import { navigate } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/Layout"

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
