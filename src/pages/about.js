import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="max-w-2xl mx-auto font-sans px-6 py-10 text-base">
      <h1 className="text-4xl font-bold">Hi there,</h1>
      <p className="my-4">
        I'm Marcelo Fernandes, a software developer at{" "}
        <OutboundLink
          href="https://www.sap.com"
          target="_blank"
          className="font-bold text-blue-700 hover:underline"
        >
          SAP
        </OutboundLink>
        .
      </p>
      <p className="my-4">
        This is still a work in progress, but my idea is to split the content
        into a{" "}
        <Link to="/blog" className="font-bold hover:underline">
          Blog
        </Link>
        , which will contains longer articles, and a{" "}
        <Link to="/today-I-learned" className="font-bold hover:underline">
          Today I Learned
        </Link>{" "}
        which will contains small things or things that I learned on my day to
        day life as a dev. Although I might change that in the future, let's see
        how things go.
      </p>
      <p>
        I also want this to be simple and fast, so I used a set of{" "}
        <OutboundLink
          href="https://github.com/marceloschreiber/marcelofernandes.dev"
          target="_blank"
          className="font-bold text-blue-700 hover:underline"
        >
          cool technologies
        </OutboundLink>{" "}
        to build this.
      </p>
    </div>
  </Layout>
)

export default AboutPage
