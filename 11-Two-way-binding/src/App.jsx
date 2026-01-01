import React, { useState } from 'react'

const App = () => {

  const [title,setTitle] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form submitted by', title)
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
