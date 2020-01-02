import React from 'react';
import {Link} from "react-router-dom";
import {APP_ROUTES} from "../../pages";
import brandLogo from '../../assets/img/Worlds apart organics.png'

const Header: React.FC = () => {
    return (
        <React.Fragment>
            <header id="header" className="container-fluid page-header">
                <h1>Worlds <b>Apart</b> <b>Eco-Hotel</b></h1>
                <h2>
                    <small>
                        <b>
                            - Paragliding<br/>
                            - Hiking<br/>
                            - Waterfalls<br/>
                            - Mountain biking<br/>
                        </b>
                    </small>
                </h2>
                <div className="corner-header"/>
            </header>
            <nav id="navbar" className="navbar navbar-default container-fluid disablePointerEvents">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed d-none" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <i className="fa fa-chevron-down col-xs-1"/>
                    </button>
                    <Link className="navbar-brand" to={`${APP_ROUTES.HOME}#header`}>
                        <img className="brand-logo" src={brandLogo}/>
                    </Link>
                </div>
                <div className="navbar">
                    <ul className="nav navbar-nav text-center">
                        <li>
                            <Link to={APP_ROUTES.HOME}>Home</Link>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                               aria-expanded="false">
                                <span className="caret"/>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to={`${APP_ROUTES.HOME}#about`}>About</Link></li>
                                <li><Link to={`${APP_ROUTES.HOME}#gallery`}>Gallery</Link></li>
                                <li><Link to={`${APP_ROUTES.HOME}#map`}>Map</Link></li>
                            </ul>
                        </li>
                        <li><Link to={APP_ROUTES.ACCOMMODATIONS}>Accommodations</Link></li>
                        <li><Link to={APP_ROUTES.ACTIVITIES}>Activities</Link></li>
                        <li className="dropdown">
                            <a className="btn-active dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-haspopup="true"
                               aria-expanded="false">
                                <span className="caret"/>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to={`${APP_ROUTES.ACTIVITIES}#parallax-1`}>Hiking</Link></li>
                                <li><Link to={`${APP_ROUTES.ACTIVITIES}#parallax-2`}>Paragliding</Link></li>
                                <li><Link to={`${APP_ROUTES.ACTIVITIES}#parallax-3`}>Mountain Biking</Link></li>
                                <li><Link to={`${APP_ROUTES.ACTIVITIES}#parallax-4`}>Workshops</Link></li>
                                <li><Link to={`${APP_ROUTES.ACTIVITIES}#parallax-5`}>Horseback Riding</Link></li>
                                <li><Link to={`${APP_ROUTES.ACTIVITIES}#parallax-6`}>Canyoning</Link></li>
                            </ul>
                        </li>
                        <li><Link to={APP_ROUTES.CONTACT}>Contact</Link></li>
                    </ul>
                </div>
                <div className="corner-left hidden-xs"/>
                <div className="corner-right hidden-xs"/>
            </nav>
        </React.Fragment>
    )
};

export default Header;
