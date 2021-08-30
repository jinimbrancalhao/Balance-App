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
    const reflection = await Reflection.find()
    return res.status(200).json({ reflections })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createReflecton,
  getAllReflections
}
