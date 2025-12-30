import React from 'react'

const App = () => {

  let count = 0;
  function btnClicked(){
    count++
    console.log(count); 
  }

  return (
    <div>
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default App
