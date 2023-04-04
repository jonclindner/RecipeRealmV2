import { SiCodechef } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ]

  const handleClick = () => {
    sessionStorage.removeItem('user')
    navigate('/about')
  }

  return (
    <>
      <header className="bg-black fixed top-0 z-50 w-full ">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-blue-500 py-6 lg:border-none">
            <div className="flex items-center">
              <a href="/">
                <span className="sr-only">RecipeRealm</span>
                <SiCodechef className="mx-auto h-12 w-auto text-slate-100" />
                {/* <img className="h-10 w-auto" src="https://i.imgur.com/YrHjqIw.png" alt="" /> */}
              </a>
              <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-white hover:text-blue-50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              {sessionStorage.getItem('user') && (
                <div className="flex col-auto">
                  <div className="mt-1 flex items-center gap-x-6">
                    <a
                      href="/add"
                      className="rounded-full bg-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Add a Recipe
                    </a>
                    <button
                      onClick={handleClick}
                      className="rounded-full bg-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Logout
                    </button>
                    <img
                      className="w-10 h-10 ml-2 rounded-full object-cover"
                      src={sessionStorage.getItem('picture')}
                      alt="name"
                    />
                  </div>
                </div>
              )}
              {!sessionStorage.getItem('user') && (
                <a
                  href="/"
                  className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  <p>Sign In</p>
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-blue-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav
