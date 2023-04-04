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
    ingredient2: { type: String },
    ingredient3: { type: String },
    ingredient4: { type: String },
    ingredient5: { type: String },
    ingredient6: { type: String },
    ingredient7: { type: String },
    ingredient8: { type: String },
    ingredient9: { type: String },
    ingredient10: { type: String },
    ingredient11: { type: String },
    ingredient12: { type: String },
    ingredient13: { type: String },
    ingredient14: { type: String },
    ingredient15: { type: String },
    ingredient16: { type: String },
    ingredient17: { type: String },
    ingredient18: { type: String },
    ingredient19: { type: String },
    ingredient20: { type: String },
    image: { type: String, required: true },
    video: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Recipe', Recipe)
