import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import { formatReadingTime } from "../utils/helpers"
import { useScrollIndicator } from "../utils/scroolHook"

export default ({ data }) => {
  const post = data.markdownRemark
  const scrollPercentage = useScrollIndicator()

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <div
        class="fixed z-10 bg-blue-600 h-1 inset-0 w-0"
        id="progressBar"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
      <div className="max-w-3xl mx-auto font-sans px-6 py-10 antialiased">
        <h1 className="text-4xl font-extrabold leading-tight">
          {post.frontmatter.title}
        </h1>
        <span className="text-sm">
          {post.frontmatter.date} - {formatReadingTime(post.timeToRead)}
        </span>
        <div
          className="mt-4 blog-post text-xl"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
`
