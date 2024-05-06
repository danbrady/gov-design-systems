import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <h1 className="text-3xl font-bold underline">Gov Design Systems!</h1>

    <div className="flex gap-10">
      <Card title="United States Web Design System" />
      <Card title="Gov.UK" />
      <Card title="Swiss Style Guide" />
    </div>

    {/* <div className="card w-96">
      <div className="rounded-lg aspect-video bg-gray-600"></div>
      <div className="px-4 py-2 text-center">
        <h2 className="font-serif text-4xl font-bold my-2">
          Swiss Style Guide
        </h2>
        <h3 className="font-bold text-lg my-2">Federal Chancery</h3>
        <h4 className="uppercase text-slate-700 text-sm my-2">
          English : Français : Deutsch
        </h4>
        <a href="" className="">
          link site
        </a>
      </div>
    </div>*/}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
