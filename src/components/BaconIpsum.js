import React from "react"

export default function BaconIpsum({ ipsum }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "100vh" }}
    >
      <h3 className="mb-4 mt-4">Bacon Ipsum</h3>
      <div className="divider" />
      <div className="content-container">
        {ipsum.map((text, index) => (
          <p className="text-muted" key={index}>
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}
