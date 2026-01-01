import React from 'react'

const App = () => {

  localStorage.clear()
  sessionStorage.clear()

  localStorage.setItem('user','Bhavy')
  const user = localStorage.getItem('user')
  console.log(user);

  localStorage.removeItem('user')

  const user1 = {
    name:'Bhavy',
    age:20,
    city:'Gandhinagar'
  }

  localStorage.setItem('User',JSON.stringify(user1)) // Localstorage stores only string so that we covert object into String.

  // String to Object
  const user2 = JSON.parse(localStorage.getItem('User'))
  console.log(user1);

  return (
    <div>
      
    </div>
  )
}

export default App
