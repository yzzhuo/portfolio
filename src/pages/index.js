import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const SocialMedia = () => {
    return (
      <div className="w-full flex justify-end gap-2">
        <a href={social?.github} className="cursor-pointer">
          <svg className="w-8 h-8" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
        </a>
        <a href={social?.linkedin} className="cursor-pointer">
          <svg className="w-8 h-8" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </a>
        <a href={social?.instagram}>
          <svg className="w-8 h-8" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
          </svg>
        </a>
        <a href={social?.dribbble}>
          <svg className="w-8 h-8" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 26.169922 11 C 28.139922 11 30 12.77 30 21.5 C 30 24.62 29.469141 29.150859 27.619141 32.880859 C 28.419141 33.920859 29.22 34.25 29.75 34 C 31.25 33.28 32.209375 30.750234 33.109375 27.990234 C 33.359375 27.240234 34.190937 26.830547 34.960938 27.060547 C 35.740938 27.300547 36.179688 28.099844 35.929688 28.839844 C 35.169688 31.179844 33.040312 36.980469 29.820312 36.980469 C 28.800313 36.980469 27.429141 36.940156 26.119141 35.660156 C 24.649141 37.660156 22.820391 39 20.650391 39 C 16.060391 39 14 35.510781 14 32.050781 C 14 28.380781 15.880859 24.050781 20.130859 24.050781 C 20.850859 24.050781 21.510078 24.180859 22.080078 24.380859 C 22.000078 23.380859 22 22.580859 22 21.380859 C 22 21.270859 22.039922 11 26.169922 11 z M 26.289062 14.050781 C 25.679062 15.090781 24.960938 18.129141 24.960938 21.369141 C 24.960938 24.889141 25.370234 27.589844 25.990234 29.589844 C 26.920234 27.019844 27.039062 24.03 27.039062 21.5 C 27.039062 16.74 26.759062 14.710781 26.289062 14.050781 z M 20.119141 27 C 16.939141 27 17 31.929141 17 32.119141 C 17 33.359141 17.289141 36 20.619141 36 C 21.899141 36 23.200781 34.979687 24.300781 33.179688 C 23.630781 31.929688 23.000078 29.97 22.580078 28 C 22.500078 27.94 22.419609 27.880547 22.349609 27.810547 C 22.349609 27.810547 21.379141 27 20.119141 27 z"></path>
          </svg>
        </a>
      </div>
    )
  }

  return (
    <Layout location={location} title={siteTitle} className="h-screen flex">
      <div className="container flex items-center ">
        <div className="flex lg:flex-row lg:mt-0 mt-8 flex-col">
          <div className="self-stretch content-stretch min-w-80 lg:mr-8">
            <StaticImage
              className="h-full"
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../images/bio.jpg"
              height={512}
              quality={95}
              alt="Profile picture"
            />
          </div>
          <div className="lg:mt-0 mt-8 px-6 pb-6">
            <span className="text-xl mb-4 font-mono">Hello, I'am</span>
            <h1 className="font-serif lg:text-8xl text-6xl p-0 m-0 font-bold">{author?.name}</h1>
            <p className="text-xl lg:mt-16 mt-4">
              {author?.summary || null}
            </p>
            <p className="text-xl">
              I'm also passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        social {
          twitter
          linkedin
          dribbble
          instagram
          github
        }
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
