import { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Hero from '../components/Hero'
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
        <Hero executeScroll={executeScroll} />
        <div ref={myRef} className=" m-8 rounded-2xl">
          {recipes.map((recipe) => (
            <Card
              key={recipe._id}
              id={recipe._id}
              height={recipe.height}
              image={recipe.image}
              length={recipe.length}
              location={recipe.location}
              name={recipe.name}
              reviews={recipe.reviews}
              time={recipe.time}
              video={recipe.video}
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
