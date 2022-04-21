// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // input ref
  const username = useRef(null);
  const [error, setError] = useState(null)
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(username.current.value)

  }
 
  // Change handler

  const handleChange = (event) => {
    const isValid = event.target.value === event.target.value.toLowerCase();
    console.warn(isValid);
    setError(isValid ? null : 'Value must be lowercase');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input onChange={(e) => handleChange(e)} ref={username} type="text" />
      </div>
      
      <button disabled={error} type="submit">Submit</button>
      <div role="alert">{error}</div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
