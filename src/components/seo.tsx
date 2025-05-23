/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLanguage } from '../context/LanguageContext';

interface SEOPropsInterface {
  description?: string;
  lang?: string;
  meta?: { name: string; content: string }[];
  title?: string;
}

const SEO: React.FC<SEOPropsInterface> = ({
  description,
  lang,
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `,
  );

  const { language } = useLanguage();
  const metaDescription = description || site.siteMetadata.description;

  // Create alternate links for hreflang
  const alternateLinks = [
    {
      rel: 'alternate',
      hreflang: 'en',
      href: `${site.siteMetadata.siteUrl}/`,
    },
    {
      rel: 'alternate',
      hreflang: 'zh',
      href: `${site.siteMetadata.siteUrl}/`,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang: language || lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {/* Preconnect to external domains for better performance */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Add alternate language links */}
      {alternateLinks.map(link => (
        <link key={link.hreflang} {...link} />
      ))}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
};

export default SEO;
