import { GiCook } from 'react-icons/gi'

const Hero = ({ executeScroll }) => {
  return (
    <div className="relative bg-white lg:mt-24 mt-44">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <GiCook size={80} className="h-11 text-blue-600" />
            <h1 className="mt-24 text-4xl font-thin tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Welcome to RecipeRealm
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-600">
              Click below to view our recipes!
            </p>

            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-red-900/100">
                Find the best recipes{' '}
                <button
                  onClick={executeScroll}
                  className="rounded-full bg-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-3xl"
            src="https://images.livspace-cdn.com/w:1600/h:630/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2018/10/12111535/cover-3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
