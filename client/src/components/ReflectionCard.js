import React from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'

const ReflectionCard = (props) => {
  const deleteReflection = async () => {
    await axios.delete(`http://localhost:3001/api/reflections/${props.id}`)
  }

  return (
    <div className="card-inner">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.date}</Card.Text>
          <Card.Text>{props.description}</Card.Text>
          <Button onClick={deleteReflection}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ReflectionCard
