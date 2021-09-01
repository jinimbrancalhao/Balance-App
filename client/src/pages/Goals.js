import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GoalCard from '../components/GoalCard'

const Goals = () => {
  const [goals, setGoals] = useState([])

  const getGoals = async () => {
    const res = await axios.get('http://localhost:3001/api/goals')
    setGoals(res.data.goals)
  }

  useEffect(() => {
    getGoals()
  }, [])

  return (
    <div>
      <h1>Goals</h1>
      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          title={goal.title}
          start={goal.start}
          end={goal.end}
          description={goal.description}
        />
      ))}
    </div>
  )
}

export default Goals
