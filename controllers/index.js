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

module.exports = {
  createReflecton
}
