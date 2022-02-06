import PropTypes from "prop-types";
import { MdClose, MdChevronRight } from "react-icons/md";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "utils/types";
import ButtonLink from "./button-link";
import { useLockBodyScroll } from "utils/hooks";
import { getButtonAppearance } from "utils/button";
import CustomLink from "./custom-link";

const MobileNavMenu = ({ navbar, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll();

  return (
    <div onClick={closeSelf} className="w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-primary z-10 pb-6">
      <div className="container h-full flex flex-col justify-between">
        {/* Top section */}
        <div className="flex flex-row justify-between py-2 items-center">
          {/* Company logo */}
          <img media={navbar.logo} className="h-8 w-auto object-contain" />
          {/* Close button */}
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-end w-9/12 mx-auto">
          <ul className="flex flex-col list-none gap-6 items-baseline text-xl semi-bold mb-10">
            {navbar.links.map((navLink) => (
              <li key={navLink.id} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="rounded-xl py-6 flex flex-row justify-between items-center hover:bg-secondary">
                    <span>{navLink.text}</span>
                    <MdChevronRight className="h-8 w-auto" />
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default MobileNavMenu;
