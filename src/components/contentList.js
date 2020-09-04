import React from "react"
import { Link } from "gatsby"

import { formatReadingTime } from "../utils/helpers"

const ContentList = ({ entries }) => (
  <div className="max-w-3xl mx-auto font-sans px-6 py-10 first:mt-0 ">
    {entries.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} className="antialised mb-12">
        <Link to={node.fields.slug}>
          <h3 className="text-4xl font-extrabold leading-tight">
            {node.frontmatter.title}
          </h3>
        </Link>
        <p className="text-sm">
          {node.frontmatter.date} - {formatReadingTime(node.timeToRead)}
        </p>
        <p className="text-lg mt-2">{node.frontmatter.spoiler}</p>
      </div>
    ))}
  </div>
)

export default ContentList
