import React from "react"

export default ({ name }) => (
  <div className="bio-card">
    <img
      src="https://gatsby-html-partial-assets.s3.eu-west-2.amazonaws.com/person.png"
      alt="Comically crude stick person sketch"
    />
    <p>{name}</p>
  </div>
)
