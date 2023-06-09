import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import manageLogo from "@/public/logo.svg";
import { Twirl as Hamburger } from "hamburger-react";
import navStyle from "@/styles/Navigation.module.scss";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOpen = () => {
    setOpenMenu((currentState) => !currentState);
  };

  useEffect(() => {
    const getWindowSize = () => {
      if (window.innerWidth >= 730) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", getWindowSize);
    return () => window.removeEventListener("resize", getWindowSize);
  }, []);

  return (
    <>
      <nav className={openMenu ? navStyle.navChange : navStyle.nav}>
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
            {/* <Button btnTitle="Get Started" /> */}
            <Link href="/" className="navButton">
              Get Started
            </Link>
            {/* desktop view */}

            {/* mobile view */}
            <button className={navStyle.menuButton}>
              <Hamburger toggled={openMenu} toggle={menuOpen} size={25} />
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
    </>
  );
};

export default Navigation;
