import React from "react"

export default ({ name }) => (
  <div className="bio-card">
    <img
      src="/assets/person.png"
      alt="Comically crude stick person sketch"
    />
    <p>{name}</p>
  </div>
)
