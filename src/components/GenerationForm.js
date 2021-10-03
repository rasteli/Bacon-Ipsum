import { useState } from "react"
import { useHistory } from "react-router"
import { Form, Button } from "react-bootstrap"

import api from "../services/api"

export default function GenerationForm({ setIpsum }) {
  const history = useHistory()

  const [number, setNumber] = useState(1)
  const [loremStart, setLoremStart] = useState(0)
  const [query, setQuery] = useState("paras")

  async function generate() {
    const response = await api.get(
      `/?type=meat-and-filler&${query}=${number}&start-with-lorem=${loremStart}`
    )

    setIpsum(response.data)
    history.push(`/bacon-ipsum`)
  }

  function handleLoremCheck(e) {
    const checked = e.target.checked
    const start = checked ? 1 : 0

    setLoremStart(start)
  }

  function handleParagraphSentenceCheck(e) {
    const inputName = e.target.alt

    switch (inputName) {
      case "paragraphs":
        setQuery("paras")
        break

      case "sentences":
        setQuery("sentences")
        break

      default:
        break
    }
  }

  return (
    <Form>
      <Form.Label>
        <span style={{ marginRight: "10px" }}>How many</span>
        <Form.Check
          inline
          name="grp1"
          type="radio"
          defaultChecked
          alt="paragraphs"
          label="paragraphs"
          onClick={handleParagraphSentenceCheck}
        />
        <Form.Check
          inline
          name="grp1"
          type="radio"
          alt="sentences"
          label="sentences"
          onClick={handleParagraphSentenceCheck}
        />
      </Form.Label>
      <Form.Control
        type="number"
        defaultValue={number}
        onChange={e => setNumber(e.target.value)}
      />
      <Form.Check
        className="mt-2"
        label={`Start with ${"Bacon ipsum dolor..."}`}
        onClick={handleLoremCheck}
      />
      <Button variant="danger" className="mt-2 mb-5" onClick={generate}>
        Generate
      </Button>
    </Form>
  )
}
