import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="max-w-2xl mx-auto font-sans px-6 text-center">
      <h1 className="text-10xl	font-extrabold mt-10">404</h1>
      <p className="text-lg">This page doesn't exist.</p>
    </div>
  </Layout>
)

export default NotFoundPage
