import { useState } from 'react'
import steveIcon from './assets/underConstructionSteve.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={steveIcon} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Website Under Construction!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          press this for nothing {count}
        </button>
      </div>

    </>
  )
}

export default App
