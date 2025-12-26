import { useState } from 'react'
import Component from './Component'
import Daughter from './Daughter'
import Son from './Son'
import List from './List'

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
      <h3>Props Children</h3>
      <Son>
        <p>You're son of a App</p>
      </Son>
      <Daughter>
        <p>You're daughter of a App</p>
      </Daughter>
      <List />
    </div>
  )
}

export default App
