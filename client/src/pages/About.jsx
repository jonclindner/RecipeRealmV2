// import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <div className="relative bg-white mt-24">
        <img
          className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
          src="https://images2.minutemediacdn.com/image/upload/c_crop,w_2121,h_1193,x_0,y_133/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FvoltaxMediaLibrary%2Fmmsport%2Fmentalfloss%2F01g0z4n2n16ryjj6w8vk.jpg"
          alt=""
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-8 text-blue-600">
                About:
              </h2>
              <p className="mt-2 text-3xl  tracking-tight text-gray-900 sm:text-2xl">
                Our mission is to bring people from all cultures and walks of
                life together by fostering cultural celebration and diversity
                through sharing of food. We strive to provide a platform where
                users can discover and share recipes from their own cultures and
                learn about others, creating a sense of community and
                appreciation for the world's diverse culinary traditions.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                RecipeRealm was created by Jon Lindner as the final project for
                General Assembly's immersive software engineering course. Click
                on my photo below to view my profile on LinkedIn!
              </p>
              <div className="flex justify-center mt-10">
                <Link to="https://www.linkedin.com/in/jon-lindner-807847183/">
                  <img
                    src="https://media.licdn.com/dms/image/D4E03AQGU_g4hzJWZ2w/profile-displayphoto-shrink_200_200/0/1676421652630?e=1683763200&v=beta&t=Q_wGyL4gxSI1eglBACTTLS_tIVPgOux27yMpj-OhDus"
                    className="w-30 h-30 rounded-full transition duration-300 ease-in-out hover:scale-110 "
                  />
                </Link>
              </div>
              {/* <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                  >
                    <dt className="text-sm leading-6 text-gray-600">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default About
