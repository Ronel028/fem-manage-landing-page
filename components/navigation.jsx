import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import manageLogo from "@/public/logo.svg";
import hamburgerIcon from "@/public/icon-hamburger.svg";
import closeIcon from "@/public/icon-close.svg";
import navStyle from "@/styles/Navigation.module.scss";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOpen = () => {
    setOpenMenu((currentState) => !currentState);
  };

  return (
    <div>
      <nav className={navStyle.nav}>
        <div className="wrapper">
          <div className={navStyle.nav__container}>
            <Image src={manageLogo} alt="manage logo" width="146" height="24" />
            {/* desktop view */}
            <ul className={navStyle.linksDesktop}>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Product</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Community</Link>
              </li>
            </ul>
            <Button btnTitle="Get Started" />
            {/* desktop view */}

            {/* mobile view */}
            <button className={navStyle.menuButton} onClick={menuOpen}>
              <Image
                src={openMenu ? closeIcon : hamburgerIcon}
                alt="hamburger icon"
                width={openMenu ? "21" : "25"}
                height={openMenu ? "22" : "18"}
                className={openMenu ? "" : navStyle.hamburgerMenu}
              />
            </button>

            {/* mobile view */}
          </div>
        </div>
      </nav>
      {/* menu mobile */}
      <div
        className={
          openMenu ? navStyle.menuMobileMain : navStyle.menuMobileClose
        }
      >
        <div className="wrapper">
          <ul className={navStyle.menuMobile}>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Product</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Community</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* menu mobile */}
    </div>
  );
};

export default Navigation;
