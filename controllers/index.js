const Recipe = require('../models/recipe')
const Reviews = require('../models/reviews')
const User = require('../models/user')

const createRecipe = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body)
    await recipe.save()
    return res.status(201).json({
      recipe
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.find().populate('reviews')
    return res.status(200).json({ recipe })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id).populate('reviews')
    if (recipe) {
      return res.status(200).json({ recipe })
    }
    return res.status(404).send('Recipe with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(recipe)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Recipe.findByIdAndDelete(id)
    console.log(deleted)
    if (deleted) {
      return res.status(200).send('Recipe deleted')
    }
    throw new Error('Recipe not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Reviews(req.body)
    await review.save()
    const recipe = await Recipe.findById(req.params.id)
    recipe.reviews.push(review._id)
    await recipe.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Reviews.findByIdAndDelete(id)
    console.log(deleted)
    if (deleted) {
      return res.status(200).send('Review is deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.findByIdAndDelete(id)
    console.log(deleted)
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params
    const review = await Reviews.findById(id)
    if (review) {
      return res.status(200).json({ review })
    }
    return res.status(404).send('Review with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateReview = async (req, res) => {
  try {
    const review = await Reviews.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const loginUser = async (req, res) => {
  const { email } = req.body
  User.findOne({ email }, (error, user) => {
    if (!user) {
      return res.status(401).json({ message: 'Email not found' })
    } else {
      res.status(200).json({ message: 'Login successful', user: user })
    }
  })
}

module.exports = {
  createRecipe,
  getAllRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  createReview,
  deleteReview,
  createUser,
  deleteUser,
  getReviewById,
  updateReview,
  loginUser
}
