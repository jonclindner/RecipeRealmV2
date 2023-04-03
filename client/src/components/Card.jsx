import { AiOutlineEdit } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { TfiClose } from 'react-icons/tfi'
import axios from 'axios'

const Card = ({
  id,
  name,
  instructions,
  prepTime,
  totalTime,
  description,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6,
  ingredient7,
  ingredient8,
  ingredient9,
  ingredient10,
  ingredient11,
  ingredient12,
  ingredient13,
  ingredient14,
  ingredient15,
  ingredient16,
  ingredient17,
  ingredient18,
  ingredient19,
  ingredient20,
  image,
  video,
  reviews,
  userId,
  getRecipes
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/viewRecipe/${id}`)
  }

  const handleDelete = async () => {
    await axios.delete(`/api/recipe/${id}`)
    getRecipes()
  }

  const handleEdit = () => {
    navigate(`/editRecipe/${id}`)
  }

  return (
    <div className="pt-8 pb-16 sm:pt-8 sm:pb-8 xl:pb-8 rounded-2xl m-4 mt-32 ">
      <div className="bg-blue-900 pb-20 sm:pb-24 xl:pb-0 rounded-2xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-2xl"
                src={image}
                alt={name}
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:py-24 xl:px-16">
            {userId === sessionStorage.getItem('user') && (
              <div className="flex gap-4">
                <TfiClose
                  size={20}
                  onClick={handleDelete}
                  className="text-white cursor-pointer"
                />

                <AiOutlineEdit
                  size={22}
                  onClick={handleEdit}
                  className="text-white cursor-pointer"
                />
              </div>
            )}
            <figure className="relative isolate pt-6 sm:pt-12">
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9 ">
                <p>{name}</p>
                <div className="mt-1 text-base text-gray-400">Description</div>
                <div className="mt-1 text-base text-gray-400">
                  {description}
                </div>
              </blockquote>
              <div className="flex flex-row flex-wrap gap-10">
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">
                    Main Ingredient
                  </div>
                  <div className="mt-1 text-gray-400">{ingredient1}</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Prep Time</div>
                  <div className="mt-1 text-gray-400">{prepTime}</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Total Time</div>
                  <div className="mt-1 text-gray-400">{totalTime}</div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">Video</div>
                  <div className="mt-1 text-gray-400">
                    <a
                      className="text-blue-300"
                      href={video}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Click to watch
                    </a>
                  </div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  <div className="font-semibold text-white">
                    Comments ({reviews.length})
                  </div>
                  <div
                    onClick={handleClick}
                    className="mt-1 text-gray-400 cursor-pointer text-blue-300"
                  >
                    View Recipe
                  </div>
                </figcaption>
                <figcaption className="mt-8 text-base mr-4 w-32">
                  {/* <BsHeart className="text-white cursor-pointer" size={30} /> */}
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
