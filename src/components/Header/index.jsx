import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    const handleScrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <header className="header">
            <div className="header__logo">
                {/* <NavLink section="intro">Una Vida</NavLink> */}
                <div onClick={handleScrollToTop}>UVDB</div>
            </div>
            <nav className="header__navigation">
                <NavLink section="story">Story</NavLink>
                <NavLink section="players">Players</NavLink>
                <NavLink section="gallery">Gallery</NavLink>
                <NavLink section="listen">Shop</NavLink>
            </nav>
            <div className="header__social">(Spring 2020)</div>
        </header>
    );
};

export default Header;

const NavLink = ({ section, children }) => {
    return (
        <Link
            activeClass="active"
            to={section}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            // onSetActive={this.handleSetActive}
        >
            {children}
        </Link>
    );
};
