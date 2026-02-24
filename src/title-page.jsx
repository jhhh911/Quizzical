export default function TitlePage(props) {
  return (
    <section className="title-page">
          <h1>Quizzical</h1>
          <p>Try your luck against the most average quiz in the world!!!</p>
          <button onClick={() => props.func(true)}>Start Quiz</button>
        </section>
  )
}