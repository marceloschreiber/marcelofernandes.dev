import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { FaLinkedin, FaGithub } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <div className="max-w-2xl mx-auto font-sans px-6 py-10 text-lg">
        <h1 className="text-4xl font-bold">Hi there,</h1>

        <p className="my-4">
          I'm Marcelo Fernandes, a software developer at{" "}
          <OutboundLink
            href="https://www.sap.com"
            target="_blank"
            className="font-bold text-blue-600 underline"
          >
            SAP
          </OutboundLink>
          .
        </p>
        <p className="my-4">
          I like to build software. Software that is fast, testable, scalable,
          adaptable, secure, measurable, and have a good user experience takes
          me to cloud nine.{" "}
        </p>
        <p className="my-4">
          These posts are mainly to myself in order to have a knowledge base
          where I can consult the problems that I have been through.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center pt-12 px-8">
          <Img
            className="rounded-full self-center transition-all duration-500 darker-img"
            fixed={data.file.childImageSharp.fixed}
            alt="Me"
          />
          <div className="flex-grow flex justify-around items-center sm:px-8 pt-8 sm:pt-0">
            <OutboundLink href="https://www.linkedin.com/in/msfernandes/">
              <FaLinkedin
                size={64}
                className="hover:text-blue-600 transition-all duration-500 cursor-pointer svg-shadow"
              />
            </OutboundLink>
            <OutboundLink href="https://github.com/marceloschreiber">
              <FaGithub
                size={64}
                className="hover:text-gray-700 transition-all duration-500 cursor-pointer svg-shadow"
              />
            </OutboundLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
