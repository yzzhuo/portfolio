import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, pageTitle, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const currentPath = location.pathname
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  console.log(currentPath)
  const menus = [{
    name: 'About',
    link: '/'
  },
  // {
  //   name: 'Projects',
  //   link: '/project'
  // },
  {
    name: 'Blogs',
    link: '/blog'
  },
  // {
  //   name: 'Experience',
  //   link: '/experience'
  // },
  {
    name: 'Resume',
    link: 'https://flowcv.com/resume/au27lmofn4'
  }
  ]
  return (
    // <div className="global-wrapper relative h-screen" data-is-root-path={isRootPath}>
    //   <nav className="flex justify-end flex-1 px-2">
    //     <ul className="flex items-stretch space-x-4">
    //       <li className="font-black">About</li>
    //       <li><Link to="/">Experience</Link></li>
    //       <li><Link to="/about">Projects</Link></li>
    //     </ul>
    //   </nav>
    //   <main>
    //     {children}
    //   </main>
    //   <footer className="absolute bottom-0 w-full">
    //     <aside className="flex">
    //       <p className="text-sm w-full text-center">Copyright © 2023 - Yanzhu Zhuo</p>
    //     </aside>
    //   </footer>
    // </div>

    <div className="min-h-screen flex flex-col relative">
      <header className="fixed w-full top-0 z-100 shadow lg:h-20 lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          {/* <a href="#">
          LOGO
          </a> */}
        </div>
        <div className="mt-4 mb-4 cursor-pointer lg:hidden block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
        </div>

        <div className={`${isMenuOpen ? '' : 'hidden'} lg:flex lg:flex-row flex-col lg:items-center lg:w-auto w-full h-full`} id="menu">
          <nav>
            <ul className="lg:flex items-center h-full justify-between text-base lg:mb-0">
              {
                menus.map(menu => (
                  <li key={menu.name} className="lg:mb-0"><a href={menu.link} className={`${currentPath.startsWith(menu.link) ? 'border-b-2' : ''} text-black lg:p-4 py-3 px-0 hover:border-b-2 border-transparent font-mono border-stone-700`}>{menu.name}</a></li>
                ))
              }
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex flex-auto mt-20">
        {children}
      </main>
    </div>
  )
}

export default Layout
