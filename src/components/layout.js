import React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion";


const Layout = ({ location, title, pageTitle, children }) => {
  const currentPath = location.pathname.split('/')[1]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const variants = {
    open: { height: "auto", opacity: 1, display: 'flex' },
    closed: { height: "0px", opacity: 0, display: 'none' },
  }

  const menus = [{
    name: 'About',
    link: '/',
    path: '',
  },
  // {
  //   name: 'Projects',
  //   link: '/project'
  // },
  // {
  //   name: 'Blogs',
  //   link: 'blog',
  //   path: 'blog',
  // },
  // {
  //   name: 'Experience',
  //   link: '/experience'
  // },
  {
    name: 'Resume',
    link: 'https://flowcv.com/resume/au27lmofn4'
  }
  ]
  const Nav = () => (
    <nav>
      <ul className="lg:flex items-center h-full justify-between text-base lg:mb-0">
        {
          menus.map(menu => (
            <li key={menu.name} className="lg:mb-0 mb-6"><a href={menu.link} className={`${currentPath === menu.path ? 'border-b-2' : ''} text-black lg:p-4  hover:border-b-2 p-0 font-mono border-stone-700`}>{menu.name}</a></li>
          ))
        }
      </ul>
    </nav>
  )
  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="fixed w-full top-0 z-50 shadow lg:h-20 lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div className="mt-4 mb-4 cursor-pointer lg:hidden block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
        </div>
        <motion.div
          variants={variants}
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          className={`flex z-50lg:flex-row flex-col w-full h-full lg:hidden`} id="menu">
          <Nav />
        </motion.div>
        <div className="lg:flex items-center w-full justify-end hidden">
          <Nav />
        </div>
      </header>
      <main className="flex flex-auto mt-18">
        {children}
      </main>
    </div>
  )
}

export default Layout
