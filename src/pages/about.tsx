import * as React from 'react';
import Layout from '../components/layout';


const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>Hi there!
        My name is Gatsby and I'm a static site generator for React.
      </p>
    </Layout>
  )
}

export const Head: React.FC = () => <>
  <title>About Page</title>
  <meta name="description" content="Your description" />
</>
export default AboutPage