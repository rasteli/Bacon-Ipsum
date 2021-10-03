import GenerationForm from "./GenerationForm"

export default function Landing({ setIpsum }) {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="mb-4 mt-4">Bacon Ipsum</h1>
      <div className="divider" />

      <div style={{ width: "80%" }}>
        <div className="first-block">
          <h3>What is Bacon Ipsum?</h3>
          <p className="text-muted">
            Bacon Ipsum is a fun mix of the well-known Lorem Ipsum filler text
            with types and cuts of meat.
          </p>
        </div>

        <div className="second-block">
          <h3>History of Bacon Ipsum</h3>
          <p className="text-muted">
            Bacon Ipsum was created by Pete Nelson (
            <a
              href="https://twitter.com/CodeGeekATX"
              rel="noreferrer"
              target="_blank"
            >
              @CodeGeekATX
            </a>
            ). On his own words:{" "}
            <em>
              "I was mocking up a web design one day and needed a few words to
              fill out a link. “Lorem ipsum bacon” popped into my head, so I
              plugged that into my HTML. Later that day, it hit me. Make a lorem
              ipsum generator but use types and cuts of meat."
            </em>
          </p>
        </div>

        <div className="third-block">
          <h3>Why to use a filler text generator?</h3>
          <p className="text-muted">
            A filler text like bacon or lorem ipsum is used as a placeholder
            text by web page editors and many desktop publishing packages. It is
            useful since it is more or less distributed making a reader less
            likely to get distracted when looking at a page layout. The
            generator comes in handy so that you won't need, by hand, to write
            your own filler text (which might take quite a while).
          </p>
        </div>

        <div className="generation-form">
          <h3>Generate Bacon Ipsum</h3>
          <GenerationForm setIpsum={setIpsum} />
        </div>
      </div>
      <div className="divider" />
    </div>
  )
}
