import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReflectionCard from '../components/ReflectionCard'
import BASE_URL from '../globals'

const Reflections = () => {
  const [reflections, setReflections] = useState([])

  // const getReflections = async () => {
  //   const res = await axios.get('http://localhost:3001/api/reflections')
  //   setReflections(res.data.reflections)
  // }

  const getReflections = async () => {
    const res = await axios.get(`${BASE_URL}/reflections`)
    setReflections(res.data.reflections)
  }

  useEffect(() => {
    getReflections()
  }, [])

  return (
    <div>
      <h1 className="title-home">Reflections</h1>
      <div className="card-outer">
        {reflections
          ? reflections.map((reflection) => (
              <ReflectionCard
                key={reflection._id}
                title={reflection.title}
                date={reflection.date}
                description={reflection.description}
                id={reflection._id}
              />
            ))
          : null}
      </div>
    </div>
  )
}

export default Reflections
