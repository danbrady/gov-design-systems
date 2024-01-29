import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Script } from "gatsby"

const IndexPage = () => (
  <Layout>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
