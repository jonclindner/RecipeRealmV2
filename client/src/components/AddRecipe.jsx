import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { TbChefHat } from 'react-icons/tb'

const AddRecipe = () => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    description: '',
    instructions: '',
    prepTime: '',
    totalTime: '',
    ingredient1: '',
    ingredient2: '',
    ingredient3: '',
    ingredient4: '',
    ingredient5: '',
    ingredient6: '',
    ingredient7: '',
    ingredient8: '',
    ingredient9: '',
    ingredient10: '',
    ingredient11: '',
    ingredient12: '',
    ingredient13: '',
    ingredient14: '',
    ingredient15: '',
    ingredient16: '',
    ingredient17: '',
    ingredient18: '',
    ingredient19: '',
    ingredient20: '',
    image: '',
    video: '',
    userId: sessionStorage.getItem('user')
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (sessionStorage.getItem('user')) {
      await axios.post('/api/recipe', formState)
      setFormState(initialState)
      navigate('/')
    }
  }

  return (
    <div className="m-8 mt-24">
      <div>
        <h2 className="mt-52 mb-15 text-center text-3xl font-normal tracking-tight text-blue-900">
          Add a recipe to&nbsp;
          <span className="font-extralight text-red-500 hover:text-red-700">
            RecipeRealm
          </span>
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Recipe Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Fill in all the fields to add a recipe to our list
              </p>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name of Dish
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.name}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description of Dish
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.description}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="instructions"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Preparation Instructions
                  </label>
                  <input
                    type="text"
                    name="instructions"
                    id="instructions"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.instrucitons}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="prepTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Preparation Time
                  </label>
                  <input
                    type="text"
                    name="prepTime"
                    id="prepTime"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.prepTime}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="totalTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Total Time (Preparation and Cooking)
                  </label>
                  <input
                    type="text"
                    name="totalTime"
                    id="totalTime"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.totalTime}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="totalTime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image (URL)
                      </label>
                      <input
                        type="text"
                        name="image"
                        id="image"
                        className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={handleChange}
                        value={formState.image}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="video"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Video (URL)
                      </label>
                      <input
                        type="text"
                        name="video"
                        id="video"
                        className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={handleChange}
                        value={formState.video}
                      />
                    </div>
                    Ingredients - One per box
                  </label>
                  <input
                    type="text"
                    name="ingredient1"
                    id="ingredient1"
                    className="border-solid border-2 border-blue-900 outline-2 mt-1 block w-full rounded-md border-black-300 shadow-lg focus:border-black-900 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient1}
                  />
                  <input
                    type="text"
                    name="ingredient2"
                    id="ingredient2"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  "
                    onChange={handleChange}
                    value={formState.ingredient2}
                  />
                  <input
                    type="text"
                    name="ingredient3"
                    id="ingredient3"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient3}
                  />
                  <input
                    type="text"
                    name="ingredient4"
                    id="ingredient4"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient4}
                  />
                  <input
                    type="text"
                    name="ingredient5"
                    id="ingredient5"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient5}
                  />
                  <input
                    type="text"
                    name="ingredient6"
                    id="ingredient6"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient6}
                  />
                  <input
                    type="text"
                    name="ingredient7"
                    id="ingredient7"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient7}
                  />
                  <input
                    type="text"
                    name="ingredient8"
                    id="ingredient8"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient8}
                  />
                  <input
                    type="text"
                    name="ingredient9"
                    id="ingredient9"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient9}
                  />
                  <input
                    type="text"
                    name="ingredient10"
                    id="ingredient10"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient10}
                  />
                  <input
                    type="text"
                    name="ingredient11"
                    id="ingredient11"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient11}
                  />
                  <input
                    type="text"
                    name="ingredient12"
                    id="ingredient12"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient12}
                  />
                  <input
                    type="text"
                    name="ingredient13"
                    id="ingredient13"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient13}
                  />
                  <input
                    type="text"
                    name="ingredient14"
                    id="ingredient14"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient14}
                  />
                  <input
                    type="text"
                    name="ingredient15"
                    id="ingredient15"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient15}
                  />
                  <input
                    type="text"
                    name="ingredient16"
                    id="ingredient16"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient16}
                  />
                  <input
                    type="text"
                    name="ingredient17"
                    id="ingredient17"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient17}
                  />
                  <input
                    type="text"
                    name="ingredient18"
                    id="ingredient18"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient18}
                  />
                  <input
                    type="text"
                    name="ingredient19"
                    id="ingredient19"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient19}
                  />
                  <input
                    type="text"
                    name="ingredient20"
                    id="ingredient20"
                    className="border-solid border-2 border-blue-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.ingredient20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to={'/'}>
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddRecipe
