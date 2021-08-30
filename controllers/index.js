const Reflection = require('../models/reflection')

const createReflecton = async (req, res) => {
  try {
    const reflection = await new Reflection(req.body)
    await reflection.save()
    return res.status(201).json({
      reflection
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllReflections = async (req, res) => {
  try {
    const reflections = await Reflection.find()
    return res.status(200).json({ reflections })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReflection = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Reflection.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Reflection deleted')
    }
    throw new Error('Plant not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createReflecton,
  getAllReflections,
  deleteReflection
}
