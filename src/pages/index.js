import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Script, graphql } from "gatsby";
import Card from "../components/card";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const cards = edges
    // .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <Card key={edge.node.id} {...edge.node.frontmatter} />);

  return (
    <Layout>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-4"> */}
      <div className="grid md:grid-cols-5 gap-8 p-4">{cards}</div>
    </Layout>
  );
};
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <>
    <html className="h-full" />
    <Seo title="Home" />
    <body className="h-full" />
  </>
);

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            date
            country
            countryCode
            language
            title
            url
            agency
            thumbnail
          }
        }
      }
    }
  }
`;
