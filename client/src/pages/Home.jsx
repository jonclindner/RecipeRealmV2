import { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Main from '../components/Main'
import axios from 'axios'

const Home = () => {
  const [recipes, setRecipes] = useState()
  const myRef = useRef(null)

  const getRecipes = async () => {
    const res = await axios.get('/api/recipe')
    setRecipes(res.data.recipe)
  }

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    recipes && (
      <>
        <Main executeScroll={executeScroll} />
        <div ref={myRef} className=" m-8 rounded-2xl">
          {recipes.map((recipe) => (
            <Card
              key={recipe._id}
              id={recipe._id}
              name={recipe.name}
              totalTime={recipe.totalTime}
              prepTime={recipe.prepTime}
              description={recipe.description}
              ingredient1={recipe.ingredient1}
              ingredient2={recipe.ingredient2}
              ingredient3={recipe.ingredient3}
              ingredient4={recipe.ingredient4}
              ingredient5={recipe.ingredient5}
              ingredient6={recipe.ingredient6}
              ingredient7={recipe.ingredient7}
              ingredient8={recipe.ingredient8}
              ingredient9={recipe.ingredient9}
              ingredient10={recipe.ingredient10}
              ingredient11={recipe.ingredient11}
              ingredient12={recipe.ingredient12}
              ingredient13={recipe.ingredient13}
              ingredient14={recipe.ingredient14}
              ingredient15={recipe.ingredient15}
              ingredient16={recipe.ingredient16}
              ingredient17={recipe.ingredient17}
              ingredient18={recipe.ingredient18}
              ingredient19={recipe.ingredient19}
              ingredient20={recipe.ingredient20}
              image={recipe.image}
              video={recipe.video}
              reviews={recipe.reviews}
              userId={recipe.userId}
              getRecipes={getRecipes}
            />
          ))}
        </div>
        <Footer />
      </>
    )
  )
}

export default Home
