import * as React from "react"
import { Link } from "gatsby"

const Layout = ({pageTitle, children} : {
  pageTitle: string,
  children: React.ReactNode
}
  ) => {
  return (
    <div className="w-full">
      <nav className="navbar w-full">
        <div className="navbar-start"></div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">              
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
      </nav>
      <main className="prose container mx-auto">
        <h1 className="primary">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout