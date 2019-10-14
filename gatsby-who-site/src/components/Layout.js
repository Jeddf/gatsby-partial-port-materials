import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

const Nav = () => (
  <nav>
    <ul>
      <li>
        <a href="/about.html">About</a>
      </li>
      <li>
        <a href="/services/index.html">Services</a>
      </li>
      <li>
        <Link to="/">Who We Are</Link>
      </li>
      <li>
        <a href="/contact.html">Contact</a>
      </li>
    </ul>
  </nav>
)

const Header = () => (
  <header>
    <h3 className="brand-color">Taylor's Tidy Trees</h3>
    <Nav />
  </header>
)

export default ({ children, staffName }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          Taylor's Tidy Trees - Who We Are{staffName ? ` - ${staffName}` : ""}
        </title>
        <link
          href="https://gatsby-html-partial-assets.s3.eu-west-2.amazonaws.com/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://gatsby-html-partial-assets.s3.eu-west-2.amazonaws.com/normalize.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://gatsby-html-partial-assets.s3.eu-west-2.amazonaws.com/style.css"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}
