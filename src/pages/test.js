import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const SocialMedia = () => {
  return (
    <div className="w-full flex justify-end">
      <a href="https://www.facebook.com">
        <StaticImage
          className="w-6 h-6"
          formats={["auto", "webp", "avif"]}
          quality={100}
          width={100}
          height={100}
          src="../images/icons8-twitter.svg"
          alt="Twitter" />
      </a>
      <a href="https://www.dribble.com">
        <StaticImage
          className="w-6 h-6"
          formats={["auto", "webp", "avif"]}
          quality={100}
          width={100}
          height={100}
          src="../images/icons8-dribbble.svg"
          alt="Twitter" />
      </a>
      <a href="https://www.twitter.com">
        <StaticImage quality={100} width={100} height={100} className="w-6 h-6" src="../images/icons8-github.svg" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com">
        <StaticImage quality={100} width={48} height={48} className="w-6 h-6" src="../images/icons8-linkedin.svg" alt="Twitter" />
      </a>
    </div>
  )
}
const BlogIndex = ({ title, data, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
    <Link className="header-link-home" to="/">
      {title}
    </Link>
  )
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <div className="w-full h-screen">
      <div className="global-wrapper relative h-screen gradient" data-is-root-path={isRootPath}>
        <SocialMedia />
        <h1 className="text-text-2xl font-bold text-white">
          Hi, I am June
        </h1>
        <div className="flex space-x-4 divide-x">
          <main className="font-mono text-xs">
            <p>
              I'm a front-end developer from China and based in Espoo, Finland. I have developed many types of front-ends from mobile pages to lowcode platforms.
              With over 5 years of experience in the industry, I have honed my skills in creating dynamic and user-friendly websites.
            </p>
            <p>
              I'm also passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
            </p>
          </main>
          <nav className="flex mt-2 pl-4">
            <ul className="flex flex-col font-mono text-sm font-bold">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Experience</Link></li>
              <li><Link to="/about">Projects</Link></li>
            </ul>
          </nav>
        </div>
        <footer className="absolute bottom-0 w-full">
          <aside className="flex">
            <p className="text-xs w-full text-center font-mono">Copyright © 2023 - Yanzhu Zhuo</p>
          </aside>
        </footer>
      </div>
    </div>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
