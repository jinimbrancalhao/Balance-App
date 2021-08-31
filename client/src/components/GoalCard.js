import React from 'react'

const GoalCard = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>
        {props.start}
        {props.end}
      </div>
      <div>{props.description}</div>
    </div>
  )
}
export default GoalCard
