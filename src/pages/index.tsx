import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<PageProps> = ({data}) => {
  const { author, works } = data.site.siteMetadata;
  const projects = data.projects.nodes;
  const blogs = data.blogs.nodes;
  console.log('---', projects)
  return (
    <Layout>
      <div className="flex justify-center flex-col mt-12 items-center">
        <StaticImage
            class="w-24 h-24 rounded-full"
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="../images/clifford.webp"
          />
        <h1 className="mt-4 mb-2">Hi, I'm {author.name}👋</h1>
        <p className="mt-0 pt-0">{author.summary}</p>
      </div>
       
       <section className="mt-12">
          <h3>EXPERIENCE</h3>
          {
            works.map((work, index) => (
              <div key={index} className="grid grid-cols-12 flex-nowrap">
                <header aria-label={work.date} className="text-sm col-span-3">{work.date}</header>
                <div className="col-span-9">
                  <header className="flex gap-4">
                    <h4 className="text-lg font-bold mt-0">{work.title}</h4> 
                    <span className="font-bold">{work.role}</span>
                  </header>
                  <p className="mt-0 text-sm">{work.description}</p>
                  <ul className="mt-2 flex gap-2 ml-0 pl-0">
                    {work.technologies.map((tech, index) => (
                      <li className="badge badge-sm badge-primary" key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          }
          <div className="flex justify-end">
            <a href="/about" className="link text-sm mt-4">View Full Resume</a>
          </div>
        </section>

        <section className="mt-12">
          <h3>PROJECTS</h3>
          <div className="flex flex-col gap-3">
          {
            projects.map((project, index) => {
              const data = project.frontmatter
              const image = getImage(data.hero_image)
              return (
                <div className="w-full flex items-center shadow-md p-2 rounded-2xl hover:ring-2 cursor-pointer gap-4">
                  <figure className="w-40 my-0">
                    <GatsbyImage image={image} />
                  </figure>
                  <div className="pl-4">
                    <h4 className="">{data.title}</h4>
                    <p>{data.summary}</p>
                  </div>
              </div>
              )
            })
          }
          </div>
          <div className="flex justify-end">
            <a href="/project" className="link text-sm mt-4">View More</a>
          </div>
        </section>

        <section className="mt-12">
          <h3>WRITINGS</h3>
          <ul className="flex flex-col gap-3 p-0">
            {
              blogs.map((blog, index) => {
                const data = blog.frontmatter
                return (
                  <li key={data.slug} className="flex justify-between items-center p-0 m-0">
                    <Link to={`/blog/${data.slug}`} className="no-underline text-md">
                      {data.title}
                    </Link>
                    <aside className="text-sm">{data.date}</aside>
                  </li>
                )
              })
            }
          </ul>
          <div className="flex justify-end">
            <a href="/blog" className="link text-sm mt-4">Older Posts</a>
          </div>
        </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home Page" description="Home Page" />

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          title
          summary
        }
        works {
          title
          role
          date
          description
          technologies
        }
      }
    }
   projects: allMdx(
      filter: { internal: {contentFilePath: { regex: "/project/" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          summary
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
    blogs: allMdx(
      filter: { internal: {contentFilePath: { regex: "/blog/" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          summary
        }
        id
        excerpt
      }
    }
  }
`
