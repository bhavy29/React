import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl'>
        <img className='h-full w-full object-cover'></img>
        <div className='absolute top-0 left-0 h-full w-full '>
            <h2>1</h2>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio eligendi ab rerum sequi hic quod. Placeat expedita consequuntur quos.</p>
                <div>
                    <button>Satisfied</button>
                    <button><i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard
