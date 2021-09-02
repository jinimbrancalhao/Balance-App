import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReflectionCard from '../components/ReflectionCard'

const Reflections = () => {
  const [reflections, setReflections] = useState([])

  const getReflections = async () => {
    const res = await axios.get('http://localhost:3001/api/reflections')
    setReflections(res.data.reflections)
  }

  useEffect(() => {
    getReflections()
  }, [])

  return (
    <div>
      <h1>Reflections</h1>
      {reflections.map((reflection) => (
        <ReflectionCard
          key={reflection._id}
          title={reflection.title}
          date={reflection.date}
          description={reflection.description}
          id={reflection._id}
        />
      ))}
    </div>
  )
}

export default Reflections
