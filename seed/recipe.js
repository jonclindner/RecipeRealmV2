const db = require('../db')
const Coaster = require('../models/recipe')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const coaster = [
    {
      name: 'Chicken Piccata',
      description:
        'A popular Italian-American dish, this chicken piccata is an easy one-pan chicken dinner that you can make at home with a handful of simple ingredients. It is so flavorful despite the short ingredient list. I love making this as a mid-week dinner as it’s perfect for a busy evening since it doesn’t take long to cook up. Even better, it’s fancy enough for when you have guests over for dinner as well.',
      instructions:
        '1. Cut chicken breasts in half lengthwise, then pound the chicken to flatten out. 2. Season chicken with salt and pepper, then dredge in flour.3. Add 2 tablespoons of olive oil and two tablespoons of butter to a large pan and warm on medium-high heat. Add the chicken and cook on each side for about 3 minutes or until golden brown. 4. Add the stock, wine, lemon juice, salt, and pepper to the pan, then bring to a boil while stirring to deglaze, reduce to a simmer and add the capers. Allow the sauce to reduce by half while stirring occasionally.5. Remove the pan from heat and stir in 2 tablespoons of butter. Season to taste with salt and pepper. 6. Return the chicken to the pan and spoon sauce over the chicken cutlets. You can warm the chicken through on low if needed, then sprinkle with parsley on top of the chicken piccata and serve.',
      prepTime: '10 minutes',
      totalTime: '30 minutes',
      ingredient1: 'Butter',
      ingredient2: 'Parsley',
      ingredient3: 'Salt',
      ingredient4: 'Pepper',
      ingredient5: 'Chicken Stock',
      ingredient6: 'Olive Oil',
      ingredient7: 'Capers',
      ingredient8: 'All-Purpose Flour',
      ingredient9: 'Lemon Juice',
      ingredient10: 'Chicken Breasts',
      ingredient11: 'White Wine',
      ingredient12: '',
      ingredient13: '',
      ingredient14: '',
      ingredient15: '',
      ingredient16: '',
      ingredient17: '',
      ingredient18: '',
      ingredient19: '',
      ingredient20: '',
      image:
        'https://preppykitchen.com/wp-content/uploads/2017/03/Chicken-Piccata-Feature.jpg',
      video: 'https://www.youtube.com/watch?v=ArQ567m3oVo&t=23s'
    }
  ]

  await Recipe.insertMany(recipe)
  console.log('Created some new recipes!')
}
const run = async () => {
  await main()
  db.close()
}

run()
