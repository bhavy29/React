import React from 'react'

const Card = (props) => {
  return (
    <div>
      Hello {props.user}, You are {props.age} year old
    </div>
  )
}

export default Card
