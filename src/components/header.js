import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { HamburgerSqueeze } from "react-animated-burgers"

function Header({ siteTitle }) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "About",
      link: "/about",
    },
  ]

  return (
    <>
      <header className="bg-black antialised shadow-md text-gray-100 font-mono ">
        <div className="container mx-auto h-20 flex items-center justify-between px-4">
          <h1 className="text-2xl md:text-3xl font-bold font-sans pl-3 sm:pl-0">
            <Link to="/">{siteTitle}</Link>
          </h1>
          <nav className="uppercase font-semibold text-lg">
            <div className="sm:hidden">
              <HamburgerSqueeze
                buttonWidth={25}
                barColor="white"
                isActive={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="burguer-btn"
              />
            </div>
            {menuItems.map((menu) => (
              <Link
                to={menu.link}
                className="ml-10 hover:text-blue-600 hidden sm:inline"
                activeClassName="text-blue-600"
                partiallyActive={true}
              >
                {menu.label}
              </Link>
            ))}
          </nav>
        </div>
        <nav
          className={`sm:hidden text-center uppercase font-semibold burguer-menu bg-black w-full ${
            isOpen ? "burguer-menu-show" : "burguer-menu-hide"
          }`}
        >
          {menuItems.map((menu) => (
            <Link
              to={menu.link}
              className="block hover:text-blue-600 py-3 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {menu.label}
            </Link>
          ))}
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
