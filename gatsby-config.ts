import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `June Zhuo`,
    siteUrl: `https://yanzhuzhuo.com`,
    author: {
      name: `June`,
      title: 'Senior Frontend Engineer',
      summary: `I love design and build user-centric products.`,
    },
    resume: 'https://flowcv.com/resume/au27lmofn4',
    socialAccounts: {
      github: `https://github.com/yzzhuo`,
      linkedin: 'https://www.linkedin.com/in/yanzhu-zhuo-23b03428b/',
      dribbble: `https://dribbble.com/junerzyz`,
      instagram: `https://www.instagram.com/junerzyz/`,
      twitter: `https://twitter.com/junerzyz`,
    },
    works: [
      {
        title: 'Tencent',
        link: 'https://www.tencent.com/en-us',
        role: 'Senior Frontend Engineer',
        date: '2020 - 2023',
        description: 'Build a low-code platform for the internal department with Vue.js and Node.js and developed mobile webpage for WeTV e-commerce business live stream events with React.js',
        technologies: ['Vue', 'TypeScript', 'Node.js', 'MySQL', 'Redis']
      }, {
        title: 'AfterShip',
        link: 'https://www.aftership.com/',
        role: 'React.js Engineer',
        date: '2019 - 2020',
        description: 'Built e-commerce market tool for online shop on Shopify with React.js, Redux and Redux-saga and implement features and wrote unit/E2E tests and collaborated with Scrum.',
        technologies: ['React.js', 'TypeScript', 'Redux', 'Redux-saga', 'Jest', 'Cypress']
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
    {
      resolve:"gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            }
          }
        ],
      }
    },
    "gatsby-transformer-sharp",
  ]
};

export default config;
