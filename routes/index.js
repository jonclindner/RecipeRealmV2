const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('I AM ROOT!'))

router.post('/recipe', controllers.createRecipe)

router.get('/recipe', controllers.getAllRecipe)

router.get('/recipe/:id', controllers.getRecipeById)
router.put('/recipe/:id', controllers.updateRecipe)
router.delete('/recipe/:id', controllers.deleteRecipe)

router.post('/recipe/:id/review', controllers.createReview)
router.delete('/review/:id', controllers.deleteReview)
router.get('/review/:id', controllers.getReviewById)
router.put('/review/:id', controllers.updateReview)

router.post('/user', controllers.createUser)
router.delete('/user/:id', controllers.deleteUser)

router.post('/login', controllers.loginUser)
module.exports = router
