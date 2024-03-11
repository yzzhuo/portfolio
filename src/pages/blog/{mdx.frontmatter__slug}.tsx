import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({data, children}: {
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
        hero_image_alt: string
        hero_image_credit_link: string
        hero_image_credit_text: string
        hero_image: {
          childImageSharp: {
            gatsbyImageData: any
          }
        }
      }
    }
  }
  children: React.ReactNode
}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  console.log('---', image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  `
export default BlogPost