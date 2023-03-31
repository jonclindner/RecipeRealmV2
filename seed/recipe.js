const db = require('../db')
const Recipe = require('../models/recipe')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const recipe = [
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
    },
    {
      name: 'Panang Curry',
      description: `Panang Gai (พะแนงไก่) or Panang curry with chicken, is a traditional Thai recipe with red curry paste, chicken and coconut milk. This curry originates from the Panang, in the central region of Thailand. It has the most prominent zesty and nutty flavors of Kaffir lime and Peanuts. This orangish curry absolutely looks delicious and mouth-watering. It is so simple and can be prepared in just 20 mins if you have the homemade curry paste ready with you. The only difference between the red curry paste and the Panang curry paste would be the roasted peanut, making the curry thick and creamy. Trust me you are going to love this curry and it's definitely worth a try.In this recipe, you will understand how to make the curry paste from scratch. We usually prefer fresh homemade Panang curry paste as it's the best way to get the fresh flavors of the curry.`,
      instructions:
        'In a saute pan or a wok over medium-high heat, reduce ½ cup coconut milk until thickened and creamy.2 Stir in curry paste and reduce the heat to medium-low. Cook the paste for a few minutes, stirring constantly, until coconut oil separates away from the paste.3 Add palm sugar and kaffir lime leaves and cook for a minute or so until the sugar is dissolved.4 Add chicken and quickly toss it with the curry paste, Once the chicken is about 50% cooked, add the remaining coconut milk and stir for 30 more seconds or just until the chicken is fully cooked. If it looks too dry, you can add a splash of water at this point. 5 Add some fish sauce and cook the curry for 5 mins. 6 Add in red peppers and turn off the heat. 7 Garnish with julienned kaffir lime leaves and more red peppers as desired. 8 Serve with jasmine rice, enjoy!',
      prepTime: '10 minutes',
      totalTime: '30 minutes',
      ingredient1: 'Dried Red Chilies',
      ingredient2: 'Shallots',
      ingredient3: 'Lemongrass Stalk',
      ingredient4: 'Garlic',
      ingredient5: 'Kaffir Lime Zest',
      ingredient6: 'Galangal',
      ingredient7: 'Shrimp Paste',
      ingredient8: 'Cumin and Coriander Seeds',
      ingredient9: 'Roasted Peanuts',
      ingredient10: 'Coconut Milk',
      ingredient11: 'White Pepper Powder',
      ingredient12: 'Panang Curry Paste',
      ingredient13: 'Palm Sugar',
      ingredient14: 'Kaffir Lime Leaves',
      ingredient15: 'Chicken Thigh Fillets',
      ingredient16: 'Fish Sauce',
      ingredient17: '',
      ingredient18: '',
      ingredient19: '',
      ingredient20: '',
      image:
        'https://satyamskitchen.com/wp-content/uploads/2021/05/website-3.jpg',
      video: 'youtube.com/watch?v=dYZHzK7YfYI'
    }
  ]

  await Recipe.insertMany(recipes)
  console.log('Created some new recipes!')
}
const run = async () => {
  await main()
  db.close()
}

run()
