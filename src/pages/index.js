import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-wrap">
      <div className="w-1/2 bg-gray-400 h-12">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
      <div className="w-1/2 bg-gray-400 h-12">
        <Image />
      </div>
      <div className="w-full">
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
