import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
require("prismjs/themes/prism-tomorrow.css")

const BlogPost = ({data, children}: {
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
      }
    }
  }
  children: React.ReactNode
}) => {
  return (
    <Layout>
      <article className="prose lg:prose-lg">
        <header className='text-center'>
          <h2 >{data.mdx.frontmatter.title}</h2>
          <p className="font-thin text-sm">{data.mdx.frontmatter.date}</p>
        </header>
     
      {/* <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p> */}
        {children}
      </article>
    </Layout>
  )
}

export const Head: React.FC = () => <Seo title="Super Cool Blog Post" description="Super Cool Blog Post" />

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
  `
export default BlogPost