// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)

  const [username, setUsername] = React.useState('')

  const handleChange = event => {
    const value = event.target.value
    const isValid = value === setUsername(value.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault()
    const username = inputRef.current.value
    alert(`You entered: ${username}`)
  }

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          ref={inputRef}
          role="alert"
          onChange={handleChange}
          value={username}
        />
      </div>

      <button type="submit" disabled={!username.length}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
