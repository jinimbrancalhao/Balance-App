import React from 'react'

const ReflectionCard = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.date}</div>
      <div>{props.description}</div>
    </div>
  )
}

export default ReflectionCard
