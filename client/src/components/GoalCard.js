import React from 'react'
import axios from 'axios'

const GoalCard = (props) => {
  const deleteGoal = async () => {
    await axios.delete(`http://localhost:3001/api/goals/${props.id}`)
  }

  return (
    <div>
      <div>{props.title}</div>
      <div>
        {props.start}
        {props.end}
      </div>
      <div>{props.description}</div>
      <div>
        <button onClick={deleteGoal}>Delete</button>
      </div>
    </div>
  )
}
export default GoalCard
