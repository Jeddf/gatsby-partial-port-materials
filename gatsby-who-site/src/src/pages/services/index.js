import React from "react"
import Layout from "../../components/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout breadcrumbs={["Who We Are"]}>
    <h1>Services</h1>
    <ul>
      <li>
        <Link to="/services/cleaning">Cleaning</Link>
      </li>
      <li>
        <Link to="/services/growing">Growing</Link>
      </li>
      <li>
        <Link to="/services/shrinking">Shrinking</Link>
      </li>
    </ul>
  </Layout>
)
