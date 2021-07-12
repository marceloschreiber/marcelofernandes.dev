import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => (
  <footer className="bg-black text-gray-300 text-center font-sans tracking-wide text-sm w-full">
    <div className="my-6 px-3">
      © {new Date().getFullYear()} Marcelo Fernandes |{" "}
      <OutboundLink
        href="https://github.com/marceloschreiber/marcelofernandes.dev"
        target="_blank"
        className="text-blue-600 underline"
      >
        Site
      </OutboundLink>
      {` `}
      built with
      {` `}
      <OutboundLink
        href="https://www.gatsbyjs.org"
        target="_blank"
        className="text-blue-600 underline"
      >
        Gatsby
      </OutboundLink>{" "}
      and{" "}
      <OutboundLink
        href="https://tailwindcss.com"
        target="_blank"
        className="text-blue-600 underline"
      >
        TailwindCSS
      </OutboundLink>
      .
    </div>
  </footer>
)

export default Footer
