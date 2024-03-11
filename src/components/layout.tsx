import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Layout = ({pageTitle, children} : {
  pageTitle: string,
  children: React.ReactNode
}
  ) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  return (
    <div className="w-full">
      <nav className="navbar w-full">
        <div className="navbar-start">
         <header className="font-bold text-xl ml-4">{data.site.siteMetadata.title}</header>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-lg menu-horizontal px-1">              
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
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