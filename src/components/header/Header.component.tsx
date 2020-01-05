import React from 'react';
import { NavLink} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
import {APP_ROUTES} from "../../pages";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import brandLogo from '../../assets/img/Worlds apart organics.png'
import "./header.component.scss";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header: React.FC = () => {
    return (
        <>
            <header id="header" className="container-fluid page-header">
                <h1>Worlds <b>Apart</b> <b>Eco-Hotel</b></h1>
                <h4>
                    <small>
                        <b>
                            - Paragliding<br/>
                            - Hiking<br/>
                            - Waterfalls<br/>
                            - Mountain biking<br/>
                        </b>
                    </small>
                </h4>
                <div className="corner-header"/>
            </header>
            <Navbar className="page-navbar py-0" expand="lg">
                <Link smooth={true} className="navbar-item py-2" to={APP_ROUTES.DEFAULT}>
                    <Navbar.Brand>
                        <img className="brand-logo" src={brandLogo}/>
                    </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
                    <Nav className="mr-auto d-flex align-items-center">
                        <NavLink className="navbar-item" activeClassName='active' to={APP_ROUTES.HOME}>
                            Home
                        </NavLink>
                        <NavDropdown className="navbar-item" title="" id="basic-nav-dropdown-home">
                            <Link smooth={true} to={`${APP_ROUTES.HOME}#about`}>
                                <div className="dropdown-item">
                                    About
                                </div>
                            </Link>
                            <Link smooth={true} to={`${APP_ROUTES.HOME}#gallery`}>
                                <div className="dropdown-item">
                                    Gallery
                                </div>
                            </Link>

                            <Link smooth={true} to={`${APP_ROUTES.HOME}#map`}>
                                <div className="dropdown-item">
                                    Map
                                </div>
                            </Link>

                        </NavDropdown>

                        <NavLink className="navbar-item" activeClassName='active' to={APP_ROUTES.ACCOMMODATIONS}>
                            Accommodations
                        </NavLink>
                        <NavDropdown className="navbar-item nav-dropdown" title=""
                                     id="basic-nav-dropdown-accommodations">
                            <Link smooth={true} to={`${APP_ROUTES.ACCOMMODATIONS}#cabin`}>
                                <div className="dropdown-item">
                                    Cabin
                                </div>
                            </Link>

                            <Link smooth={true} to={`${APP_ROUTES.ACCOMMODATIONS}#mainHouse`}>
                                <div className="dropdown-item">
                                    Main house
                                </div>
                            </Link>

                        </NavDropdown>

                        <NavLink className="navbar-item" activeClassName='active' to={APP_ROUTES.ACTIVITIES}>
                            Activities
                        </NavLink>
                        <NavDropdown className="navbar-item nav-dropdown" title="" id="basic-nav-dropdown-activities">
                            <Link smooth={true} to={`${APP_ROUTES.ACTIVITIES}#hiking`}>
                                <div className="dropdown-item">
                                    Hiking
                                </div>
                            </Link>

                            <Link smooth={true} to={`${APP_ROUTES.ACTIVITIES}#paragliding`}>
                                <div className="dropdown-item">
                                    Paragliding
                                </div>
                            </Link>

                            <Link smooth={true} to={`${APP_ROUTES.ACTIVITIES}#mountain-biking`}>
                                <div className="dropdown-item">
                                    Mountain Biking
                                </div>
                            </Link>

                            <Link smooth={true} to={`${APP_ROUTES.ACTIVITIES}#workshops`}>
                                <div className="dropdown-item">
                                    Workshops
                                </div>
                            </Link>

                            <Link smooth={true} to={`${APP_ROUTES.ACTIVITIES}#horseback`}>
                                <div className="dropdown-item">
                                    Horseback Riding
                                </div>
                            </Link>

                            <Link smooth={true} to={`${APP_ROUTES.ACTIVITIES}#cannyoning`}>
                                <div className="dropdown-item">
                                    Canyoning
                                </div>
                            </Link>

                        </NavDropdown>

                        <NavLink className="navbar-item" activeClassName='active' to={APP_ROUTES.CONTACT}>
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                <div className="corner-left hidden-xs"/>
                <div className="corner-right hidden-xs"/>
            </Navbar>
        </>
    )
};

export default Header;
