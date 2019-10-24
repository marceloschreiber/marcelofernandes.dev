import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { formatReadingTime } from "../utils/helpers"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="max-w-3xl mx-auto font-sans px-6 py-10 first:mt-0 ">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="antialised mb-10">
            <Link to={node.fields.slug}>
              <h3 className="text-4xl font-extrabold leading-tight hover:underline">
                {node.frontmatter.title}
              </h3>
            </Link>
            <p className="text-sm">
              {node.frontmatter.date} - {formatReadingTime(node.timeToRead)}
            </p>
            <p className="text-base mt-2">{node.frontmatter.spoiler}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            spoiler
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`
