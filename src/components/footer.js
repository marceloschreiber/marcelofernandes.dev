import React from "react"


const Footer = () => (
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
          and {" "}
          <a
            href="https://tailwindcss.com"
            className="text-blue-600 hover:underline"
          >
            TailwindCSS
          </a>
          .
        </div>
      </footer>
)

export default Footer;