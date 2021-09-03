import React from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'

const GoalCard = (props) => {
  const deleteGoal = async () => {
    await axios.delete(`http://localhost:3001/api/goals/${props.id}`)
    window.location.reload()
  }

  return (
    <div className="card-inner">
      <Card className="border" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.start}</Card.Text>
          <Card.Text>{props.end}</Card.Text>
          <Card.Text>{props.description}</Card.Text>
          <div className="delete-buttons">
            <Button onClick={deleteGoal}>Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default GoalCard
