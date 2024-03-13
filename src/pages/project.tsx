import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from 'gatsby'

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
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/project/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
                </h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </article>
          ))
        }
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
        }
        id
        excerpt
      }
    }
}`