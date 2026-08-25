import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrease
        </button>
      </section>
    </>
  )
}

export default App
