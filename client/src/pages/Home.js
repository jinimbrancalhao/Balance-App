import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

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
    document.getElementById('post').reset()
  }

  const handleSubmitRef = (e) => {
    e.preventDefault()
    addNewReflection(newReflection)
    document.getElementById('post-ref').reset()
  }

  return (
    <div>
      <h1 className="title">Balance</h1>
      <div className="heading">Make Goal</div>
      <div className="form">
        <Form onSubmit={handleSubmit} id="post">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Start Goal</Form.Label>
            <Form.Control
              name="start"
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Goal</Form.Label>
            <Form.Control
              name="end"
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
      <div className="heading">Make Reflection</div>
      <div className="form">
        <form onSubmit={handleSubmitRef} id="post-ref">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              onChange={(e) => {
                handleChangeRef(e)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="date"
              onChange={(e) => {
                handleChangeRef(e)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              onChange={(e) => {
                handleChangeRef(e)
              }}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default Home
