import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>Hi there!
        My name is June
      </p>
    </Layout>
  )
}

export const Head: React.FC = () => <Seo title="About Page" description="About Page" />

export default AboutPage