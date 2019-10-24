import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout breadcrumbs={["Who We Are"]}>
    <h1>Who We Are</h1>
    <h2>These are our staff:</h2>
    <ul>
      <li>
        <Link to="/who/ella-arborist">Ella (Arborist)</Link>
      </li>
      <li>
        <Link to="/who/sam-surgeon">Sam (Tree Surgeon)</Link>
      </li>
      <li>
        <Link to="/who/marin-leafer">Marin (Leafer)</Link>
      </li>
    </ul>
  </Layout>
)
