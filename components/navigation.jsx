import Image from "next/image";
import Link from "next/link";
import manageLogo from "@/public/logo.svg";
import hamburgerIcon from "@/public/icon-hamburger.svg";
import navStyle from "@/styles/Navigation.module.scss";

const Navigation = () => {
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
            <Link href="/" className={navStyle.button}>
              Get Started
            </Link>
            {/* desktop view */}

            {/* mobile view */}
            <button className={navStyle.menuButton}>
              <Image
                src={hamburgerIcon}
                alt="hamburger icon"
                width="25"
                height="18"
                className={navStyle.hamburgerMenu}
              />
            </button>
            {/* mobile view */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
