import React from "react"

import Layout from "../components/layout"
import HomePage from "../components/homepage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
  </Layout>
)

export default IndexPage
