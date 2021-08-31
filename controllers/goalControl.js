const Goal = require('../models/goal')

const createGoal = async (req, res) => {
  try {
    const goal = await new Goal(req.body)
    await goal.save()
    return res.status(201).json({
      goal
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllGoals = async (req, res) => {
  try {
    const goals = await Goal.find()
    return res.status(200).json({ goals })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteGoal = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Goal.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Goal deleted')
    }
    throw new Error('Plant not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createGoal,
  getAllGoals,
  deleteGoal
}
