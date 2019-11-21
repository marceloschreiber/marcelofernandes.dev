import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { HamburgerSqueeze } from "react-animated-burgers"

function Header({ siteTitle }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="bg-black antialised shadow-md text-gray-100 font-mono ">
        <div className="container mx-auto h-20 flex items-center justify-between px-4">
          <h1 className="text-2xl md:text-3xl font-bold font-sans pl-3 sm:pl-0">
            <Link to="/">{siteTitle}</Link>
          </h1>
          <nav className="uppercase font-semibold">
            <div className="sm:hidden">
              <HamburgerSqueeze
                buttonWidth={25}
                barColor="white"
                isActive={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="burguer-btn"
              />
            </div>
            <Link to="/" className="ml-10 hover:text-blue-700 hidden sm:inline">
              Blog
            </Link>
            <Link
              to="/today-I-learned"
              className="ml-10 hover:text-blue-700 hidden sm:inline"
            >
              Today I Learned
            </Link>
            <Link
              to="/about"
              className="ml-10 hover:text-blue-700 hidden sm:inline"
            >
              About
            </Link>
          </nav>
        </div>
        <nav
          className={`sm:hidden text-center uppercase font-semibold burguer-menu bg-black w-full ${
            isOpen ? "burguer-menu-show" : "burguer-menu-hide"
          }`}
        >
          <Link
            to="/"
            className="block hover:text-blue-700 hover:underline py-3"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/today-I-learned"
            className="block hover:text-blue-700 hover:underline py-3"
            onClick={() => setIsOpen(false)}
          >
            Today I Learned
          </Link>
          <Link
            to="/about"
            className="block hover:text-blue-700 hover:underline py-3"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </nav>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
