import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}: {
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
    <Layout pageTitle="Blogs">
      <div className="flex flex-col gap-8">
        {
            data.allMdx.nodes.map(node => (
              <article key={node.id} className="flex justify-between border-b-2 border-gray-100 pb-4">
                <h3 className="text-lg">
                  <Link to={`/blog/${node.frontmatter.slug}`} className="no-underline font-bold hover:text-primary">
                    {node.frontmatter.title}
                  </Link>
                  </h3>
                  <div className="text-sm text-gray-500 font-thin">
                    <span>{node.frontmatter.date}</span>
                  </div>
              </article>
            ))
          }
      </div>
    </Layout>
  )
}

export const Head: React.FC = () => <Seo title="Blog Page" description="Blog Posts" />

export default BlogPage

export const query = graphql`
  query {
    allMdx(
      filter: { internal: {contentFilePath: { regex: "/blog/" } } }
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