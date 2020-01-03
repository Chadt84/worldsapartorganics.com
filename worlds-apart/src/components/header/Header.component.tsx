import React from 'react';
import {Link, NavLink} from "react-router-dom";
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
                <Link className="navbar-item py-2" to={APP_ROUTES.DEFAULT}>
                    <Navbar.Brand>
                        <img className="brand-logo" src={brandLogo}/>
                    </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
                    <Nav className="mr-auto d-flex align-items-center">
                        <NavLink className="navbar-item" activeClassName='active' to={APP_ROUTES.HOME}>
                            Home
                        </NavLink>
                        <NavDropdown className="navbar-item nav-dropdown" title="" id="basic-nav-dropdown-home">
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.HOME}#about`}>About</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.HOME}#gallery`}>Gallery</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.HOME}#map`}>Map</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavLink className="navbar-item" activeClassName='active' to={APP_ROUTES.ACCOMMODATIONS}>
                            Accommodations
                        </NavLink>
                        <NavDropdown className="navbar-item nav-dropdown" title=""
                                     id="basic-nav-dropdown-accommodations">
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.ACCOMMODATIONS}#cabin`}>Cabin</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.ACCOMMODATIONS}#mainHouse`}>Main house</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavLink className="navbar-item" activeClassName='active' to={APP_ROUTES.ACTIVITIES}>
                            Activities
                        </NavLink>
                        <NavDropdown className="navbar-item nav-dropdown" title="" id="basic-nav-dropdown-activities">
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.ACTIVITIES}#parallax-1`}>Hiking</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.ACTIVITIES}#parallax-2`}>Paragliding</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.ACTIVITIES}#parallax-3`}>Mountain Biking</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.ACTIVITIES}#parallax-4`}>Workshops</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.ACTIVITIES}#parallax-5`}>Horseback Riding</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-item">
                                <Link to={`${APP_ROUTES.ACTIVITIES}#parallax-6`}>Canyoning</Link>
                            </NavDropdown.Item>
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
