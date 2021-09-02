import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
  const [newGoal, setNewGoal] = useState({
    title: '',
    start: '',
    end: '',
    description: ''
  })

  const [newReflection, setNewReflection] = useState({
    title: '',
    date: '',
    description: ''
  })

  const handleChange = (e) => {
    e.preventDefault()
    setNewGoal({ ...newGoal, [e.target.name]: e.target.value })
  }

  const handleChangeRef = (e) => {
    e.preventDefault()
    setNewReflection({ ...newReflection, [e.target.name]: e.target.value })
  }

  const addNewGoal = async (formdata) => {
    try {
      const res = await axios.post(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/api/goals`
          : 'http://localhost:3001/api/goals',
        formdata
      )
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const addNewReflection = async (formdata) => {
    try {
      const res = await axios.post(
        process.env.NODE_ENV === 'production'
          ? `${window.location.origin}/api/reflections`
          : 'http://localhost:3001/api/reflections',
        formdata
      )
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewGoal(newGoal)
  }

  const handleSubmitRef = (e) => {
    e.preventDefault()
    addNewReflection(newReflection)
  }

  return (
    <div>
      <div>Make Goal</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <input
            name="start"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <input
            name="end"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <input
            name="description"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>Make Reflection</div>
      <div>
        <form onSubmit={handleSubmitRef}>
          <input
            name="title"
            onChange={(e) => {
              handleChangeRef(e)
            }}
          />
          <input
            name="date"
            onChange={(e) => {
              handleChangeRef(e)
            }}
          />
          <input
            name="description"
            onChange={(e) => {
              handleChangeRef(e)
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Home
