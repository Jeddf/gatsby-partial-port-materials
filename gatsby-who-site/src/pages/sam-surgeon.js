import React from "react"
import Layout from "../components/Layout"
import BioCard from "../components/BioCard.js"

export default () => (
  <Layout breadcrumbs={["Who We Are", "Sam"]}>
    <h2>Sam is an excellent Tree Surgeon. We guarantee it.</h2>
    <BioCard name="Sam" />
  </Layout>
)
