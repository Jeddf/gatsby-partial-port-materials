import React from "react"
import Layout from "../components/Layout"
import BioCard from "../components/BioCard.js"

export default () => (
  <Layout breadcrumbs={["Who We Are", "Marin"]}>
    <h1>Marin - Leafer</h1>
    <h2>Marin is an excellent Leafer. We guarantee it.</h2>
    <BioCard name="Marin" />
  </Layout>
)
