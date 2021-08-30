const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/reflections', controllers.createReflecton)

router.get('/reflections', controllers.getAllReflections)

module.exports = router
