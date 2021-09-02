import React from 'react'
import axios from 'axios'

const ReflectionCard = (props) => {
  const deleteReflection = async () => {
    await axios.delete(`http://localhost:3001/api/reflections/${props.id}`)
  }

  return (
    <div>
      <div>{props.title}</div>
      <div>{props.date}</div>
      <div>{props.description}</div>
      <div>
        <button onClick={deleteReflection}>Delete</button>
      </div>
    </div>
  )
}

export default ReflectionCard
