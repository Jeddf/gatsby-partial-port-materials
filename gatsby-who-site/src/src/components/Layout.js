import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../styles/style.css"
import "../styles/normalize.css"

const Nav = () => (
  <nav>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
      <li>
        <Link to="/who">Who We Are</Link>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
)

const Header = () => (
  <header>
    <a href="/" class="brand-color logo-text">
      Taylor's Tidy Trees
    </a>
    <Nav />
  </header>
)

export default ({ children, breadcrumbs }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Taylor's Tidy Trees
          {breadcrumbs ? ` - ${breadcrumbs.join(" - ")}` : ""}
        </title>
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}
