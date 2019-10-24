import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="max-w-2xl mx-auto font-sans px-6 py-10 text-base">
      <h1 className="text-4xl font-bold">Hi there,</h1>
      <p className="my-4">
        I'm Marcelo Fernandes, a software developer at{" "}
        <a
          href="https://www.sap.com"
          className="font-bold text-blue-700 hover:underline"
        >
          SAP
        </a>
        .
      </p>
      <p className="my-4">
        This is still a work in progress, but my idea is to split the content
        into a{" "}
        <strong>
          <a href="/">Blog</a>
        </strong>
        , which will contains longer articles, and a{" "}
        <strong>Today I Learned</strong> which will contains small things that I
        learned on my day to day life as a dev.
      </p>
      <p>
        I also want this to be simple and fast, so I used a set of{" "}
        <strong>cool technologies</strong> to build this and I'm not adding any
        code more than the necessary. Which means that I'm not tracking you or
        anyone else.
      </p>
    </div>
  </Layout>
)

export default AboutPage
