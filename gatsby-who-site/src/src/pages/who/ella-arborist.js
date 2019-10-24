import React from "react"
import Layout from "../../components/Layout"
import BioCard from "../../components/BioCard.js"

export default () => (
  <Layout breadcrumbs={["Who We Are", "Ella"]}>
    <h1>Ella - Arborist</h1>
    <h2>Ella is an excellent Arborist. We guarantee it.</h2>
    <BioCard name="Ella" />
  </Layout>
)
