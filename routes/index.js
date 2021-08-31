const { Router } = require('express')
const reflections = require('../controllers/reflectionControl')
const goals = require('../controllers/goalControl')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/reflections', reflections.createReflection)

router.get('/reflections', reflections.getAllReflections)

router.delete('/reflections/:id', reflections.deleteReflection)

router.post('/goals', goals.createGoal)

router.get('/goals', goals.getAllGoals)

router.delete('/goals/:id', goals.deleteGoal)

module.exports = router
