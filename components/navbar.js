import { useState } from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import { useRouter } from "next/router"

import MobileNavMenu from "./mobile-nav-menu"
import ButtonLink from "./button-link"
import CustomLink from "./custom-link"

import { getButtonAppearance } from "utils/button"
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types"

import { MdMenu } from "react-icons/md"

const Navbar = ({ navbar }) => {
  const router = useRouter()
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  return (
    <>
      {/* The actual navbar */}
      <nav className="border-gray-200 border-b-1 py-6 sm:py-2 bg-gray-700 opacity-30 hover:opacity-100">
        <div className="container flex flex-row items-center justify-between">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center">
            { /* TODO
            navbar.logo && (
              <Link href="/">
                <a>
                  <img
                    media={navbar.logo}
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </Link>
            ) */}
            {/* List of links on desktop */}
            <ul className="hidden list-none md:flex flex-row gap-4 items-baseline ml-10 text-white">
              {navbar.links.map((navLink) => (
                <li className="rounded hover:bg-primary-500" key={navLink.id}>
                  <CustomLink link={navLink} locale={router.locale}>
                    <div className="hover:xtext-gray-900 px-2 py-1">
                      {navLink.text}
                    </div>
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="p-1 block md:hidden"
            >
              <MdMenu className="h-8 w-auto text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  )
}

export default Navbar
