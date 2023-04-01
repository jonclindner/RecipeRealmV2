import UpdateRecipe from './components/UpdateRecipe'
import AddRecipe from './components/AddRecipe'
import { Route, Routes } from 'react-router-dom'
import ViewRecipe from './pages/ViewRecipe'
import SignIn from './pages/SignIn'
import Nav from './components/Nav'
import About from './pages/About'
import { useState } from 'react'
import Home from './pages/Home'

function App() {
  const [user, setUser] = useState('')

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="">
        <Routes>
          {!user === '' ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<SignIn setUser={setUser} />} />
          )}
          <Route path="/viewRecipe/:id" element={<ViewRecipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/editRecipe/:id" element={<UpdateRecipe />} />
        </Routes>
      </main>
    </>
  )
}

export default App
