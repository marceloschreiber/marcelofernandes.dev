import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentList from "../components/contentList"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Today I Learned" />
      <ContentList entries={data} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/today-I-learned/" } } }
    ) {
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
