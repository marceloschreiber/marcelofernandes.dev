/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/tailwind.css"
import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="bg-black text-gray-300 text-center font-sans tracking-wide text-sm w-full">
        <div className="my-6 px-3">
          © {new Date().getFullYear()} Marcelo Fernandes |{" "}
          <a
            href="https://github.com/marceloschreiber/marcelofernandes.dev"
            className="text-blue-600 hover:underline"
          >
            Site{" "}
          </a>
          built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            className="text-blue-600 hover:underline"
          >
            Gatsby
          </a>{" "}
          and {` `}
          <a
            href="https://tailwindcss.com"
            className="text-blue-600 hover:underline"
          >
            TailwindCSS
          </a>
          .
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
