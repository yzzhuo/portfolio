import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Yanzhu Zhuo`,
    siteUrl: `https://yanzhuzhuo.com`,
    author: {
      name: `June`,
      title: 'Senior Frontend Engineer',
      summary: `I love design and build user-centric products.`,
    },
    social: {
      github: `https://github.com/yzzhuo`,
      linkedin: 'https://www.linkedin.com/in/yanzhu-zhuo-23b03428b/',
      dribbble: `https://dribbble.com/junerzyz`,
      instagram: `https://www.instagram.com/junerzyz/`,
      twitter: `https://twitter.com/junerzyz`,
    },
    works: [
      {
        title: 'Tencent',
        role: 'Senior Frontend Engineer',
        date: '2024 - Present',
        description: 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
        technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook']
      }, {
        title: 'AfterShip',
        role: 'React.js Engineer',
        date: '2024 - Present',
        description: 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
        technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook']
      }
    ],
    projects: [

    ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss", 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `project`,
        path: `${__dirname}/project`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ]
};

export default config;
