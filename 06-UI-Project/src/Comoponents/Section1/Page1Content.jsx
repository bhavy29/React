import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='h-[90vh] py-10 flex items-center gap-10 px-18'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content
