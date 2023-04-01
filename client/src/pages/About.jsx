// import Footer from '../components/Footer'

const About = () => {
  const stats = [
    { id: 1, name: 'Roller coasters in the World', value: '2,400+' },
    { id: 2, name: 'Different variations of roller coasters', value: '37' },
    {
      id: 3,
      name: 'First cookbook published on clay tablets',
      value: '1700 BCE'
    },
    { id: 4, name: 'Average cost to build a Roller Coaster', value: '$8M' }
  ]

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
              <h2 className="text-base font-semibold leading-8 text-indigo-600">
                Our track record
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by thousands of people&nbsp;worldwide
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our mission is to bring people from all walks of life together
                by fostering cultural celebration and diversity through sharing
                food ideas. We strive to provide a platform where users can
                discover and share recipes from their own cultures and learn
                about others, creating a sense of community and appreciation for
                the world's diverse culinary traditions.
              </p>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
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
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default About
