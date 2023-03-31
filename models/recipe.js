const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    instructions: { type: String, required: true },
    prepTime: { type: String, required: true },
    totalTime: { type: String, required: true },
    ingredient1: { type: String, required: true },
    ingredient2: { type: String, required: true },
    ingredient3: { type: String, required: true },
    ingredient4: { type: String, required: true },
    ingredient5: { type: String, required: true },
    ingredient6: { type: String, required: true },
    ingredient7: { type: String, required: true },
    ingredient8: { type: String, required: true },
    ingredient9: { type: String, required: true },
    ingredient10: { type: String, required: true },
    ingredient11: { type: String, required: true },
    ingredient12: { type: String, required: true },
    ingredient13: { type: String, required: true },
    ingredient14: { type: String, required: true },
    ingredient15: { type: String, required: true },
    ingredient16: { type: String, required: true },
    ingredient17: { type: String, required: true },
    ingredient18: { type: String, required: true },
    ingredient19: { type: String, required: true },
    ingredient20: { type: String, required: true },
    image: { type: String, required: true },
    video: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Recipe', Recipe)
