import { GiMeal } from 'react-icons/gi'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react'
import Home from './Home'
import axios from 'axios'
/*global google*/

const SignIn = ({ setUser }) => {
  const handleCallBackResponse = async (response) => {
    let userObject = jwt_decode(response.credential)
    try {
      const res = await axios.post(`/api/user`, {
        name: userObject.name,
        email: userObject.email,
        picture: userObject.picture
      })
      setUser(res.data.user)
      sessionStorage.setItem('user', res.data.user._id)
      sessionStorage.setItem('name', res.data.user.name)
      sessionStorage.setItem('picture', res.data.user.picture)
    } catch (err) {
      if (err.response.status === 500) {
        try {
          let email = { email: userObject.email }
          let res = await axios.post('/api/login', email)
          if (res.data.message === 'Login successful') {
            setUser(res.data.user)
            sessionStorage.setItem('user', res.data.user._id)
            sessionStorage.setItem('name', res.data.user.name)
            sessionStorage.setItem('picture', res.data.user.picture)
          }
        } catch (e) {}
      }
    }
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallBackResponse
    })
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large'
    })
  }, [])

  return !sessionStorage.getItem('user') ? (
    <div className="h-screen">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <GiMeal className="mx-auto h-12 w-auto text-blue-800" />
            <h2 className="mt-6 text-center text-3xl font-normal tracking-tight text-gray-900">
              Sign in to browse&nbsp;
              <span className="font-extralight text-blue-800 hover:text-blue-700">
                RecipeRealm
              </span>
            </h2>
          </div>
          <form
            className="mt-8 space-y-6 flex items-center justify-center"
            action="#"
            method="POST"
          >
            <div id="signInDiv"></div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Home />
  )
}

export default SignIn
