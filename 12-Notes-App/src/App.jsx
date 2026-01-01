import React, { useState } from 'react'

const App = () => {
  
  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')

  const [task,setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]    // Make copy of task then push our new task and asign newTask 
    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form className='flex gap-4 lg:w-1/2 flex-col items-start p-10' onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        
        {/* Title */}
        <input type="text" placeholder='Enter Notes Heading' value={title}  className='px-5 w-full font-medium py-2 border-2 outline-none rounded' onChange={(e)=>{setTitle(e.target.value)}} />
        {/* Detail */}
        <textarea type="text" placeholder='Enter Details' className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row outline-none border-2 rounded ' value={details} onChange={(e)=>setDetails(e.target.value)}/>
        <button className='bg-white text-black px-5 w-full py-2 outline-none rounded'>Add Notes</button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 bg-gray-950 flex-wrap p-10">
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className='h-52 w-40 rounded-2xl text-black p-4 bg-amber-100'>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>

    </div >
  )
}

export default App
