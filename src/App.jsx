import { useState } from 'react'
import Component from './Component'

function App() {

  const [username, setUsername] = useState("Adam")

  return (
    <div>
      <h3>Props</h3>
      <Component data="Hi I'm props value 😊" />
      <h3>Greetings</h3>
      <p> Hello, {username} </p>
      <button onClick={() => username === "Daniel" ? setUsername("Adam") : setUsername("Daniel")}>That's not me</button>
      {username === "Adam" && <p>I know you're Adam!</p>}
    </div>
  )
}

export default App
