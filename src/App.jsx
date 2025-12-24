import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [username, setUsername] = useState("Adam")

  return (
    <div>
      <p> Hello, {username} </p>
      <button onClick={() => setUsername("Daniel... Sorry")}>I'm Daniel</button>
    </div>
  )
}

export default App
