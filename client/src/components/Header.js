import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";
import {Link as Linkr} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = () => {
    const scrollTo = id => e => {
        e.preventDefault();
        scroll.scrollTo({duration: 1500, delay: 100, smooth: "easeInOutQuint", containerId: id});
    };

    return (
        <header>
            <Navbar bg="none" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/" onClick={scrollTo("home")} aria-label="Logo">
                        <img
                            src={require("./Icons/pfaLogo.png")}
                            alt="logo"
                            width="120px"
                            height="50px"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span/>
                        <span/>
                        <span/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Linkr
                                to='/Execute_python'
                                className="nav-link"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={400}>Func</Linkr>
                            <Link
                                href="#"
                                className="nav-link"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={400}>
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="nav-link"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={400}>
                                About
                            </Link>
                            <Link
                                href="#"
                                className="nav-link"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={400}>
                                Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
