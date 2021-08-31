import React, { useState } from 'react'
import axios from 'axios'
import GoalCard from '../components/GoalCard'

const Goals = () => {
  const [goals, setGoals] = useState([])

  const getGoals = async () => {
    const res = await axios.get('http://localhost:3001/api/goals')
    console.log(res)
    setGoals(res)
  }

  return (
    <div>
      <h1>Goals</h1>
      {goals.map((goal) => (
        <GoalCard />
      ))}
    </div>
  )
}

export default Goals
