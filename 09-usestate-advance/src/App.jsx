import React, { useState } from 'react'

const App = () => {

  const [num,setNum] = useState({user:'Bhavy',age:20})

  const btnClick = ()=>{
    // we change ref of object so that react can re render
    
    const newNum = {...num}
    newNum.user = "ABC"
    newNum.age = 21
    setNum(newNum)

    // Other method
    // setNum((prev)=>({...prev,age:50}))

  }

  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App
