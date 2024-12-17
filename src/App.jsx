import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {submitted ? <h1 id="submitted">Form Submitted</h1> : null}
      </div>
    </>
  );
}

export default App;
