import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Seo = ({ title, description }: { title: string, description: string }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <head>
      <title>{title} | data.site.siteMetadata.title</title>
      <meta name="description" content={description || data.site.siteMetadata.description} />
    </head>
  );
}

export default Seo;