import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const ProjectPage = ({data}: {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          date: string,
          title: string
          slug: string
        },
        id: string,
        excerpt: string
      }[]
    }
  }
}) => {
  return (
    <Layout pageTitle="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 justify-center">
        {
            data.allMdx.nodes.map(node => {
              const data = node.frontmatter
              const image = getImage(data.hero_image)

              return (
                <div key={node.id} className="relative group max-w-screen text-white shadow-xl bg-black rounded-xl">
                  <a href={data.repo} target="_blank" rel="noreferrer">
                    <figure className="rounded-xl overflow-hidden w-full h-64">
                      <GatsbyImage className="h-full" image={image}  objectFit="contain"/>
                    </figure>
                    <div className="absolute top-0 h-full px-2 py-4 hover:bg-black/60 rounded-xl flex flex-col justify-end">
                        <h2 className="card-title">{node.frontmatter.title}</h2>
                        <p className="hidden group-hover:block">{node.excerpt}</p>
                    </div>
                  </a>
                </div>
            )
          })
          }
      </div>
    </Layout>
  )
}

export const Head: React.FC = () => <Seo title="Blog Page" description="Blog Posts" />

export default ProjectPage

export const query = graphql`
  query {
    allMdx(
      filter: { internal: {contentFilePath: { regex: "/project/" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          repo          
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
}`