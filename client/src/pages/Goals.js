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
      <h1 className="title-home">Goals</h1>
      <div className="card-outer">
        {goals.map((goal) => (
          <GoalCard
            key={goal._id}
            title={goal.title}
            start={goal.start}
            end={goal.end}
            description={goal.description}
            id={goal._id}
          />
        ))}
      </div>
    </div>
  )
}

export default Goals
