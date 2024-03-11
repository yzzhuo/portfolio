import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby'

const BlogPage = ({data}: {
  data: {
    allFile: {
      nodes: {
        name: string
      }[]
    }
  }

} ) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>{node.name}</li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const Head: React.FC = () => <Seo title="Blog Page" description="Blog Posts" />

export default BlogPage

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
  }
}`