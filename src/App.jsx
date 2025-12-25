import { useState } from 'react'
import Component from './Component'

function App() {

  const [username, setUsername] = useState("Adam")

  return (
    <div>
      <h3>useState</h3>
      <p> Hello, {username} </p>
      <button onClick={() => setUsername("Daniel... Sorry")}>I'm Daniel</button>
      <h3>props</h3>
      <Component data="Hi I'm props value 😊" />
    </div>
  )
}

export default App
