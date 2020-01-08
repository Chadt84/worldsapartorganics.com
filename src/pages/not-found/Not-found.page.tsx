import React from 'react';
import {Helmet} from "react-helmet";
import "./Not-found.page.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBomb} from "@fortawesome/free-solid-svg-icons/faBomb";
import {Link} from "react-router-dom";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";

const NotFound: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Worlds Apart - Not found</title>
            </Helmet>
            <div className="container">
                <div className="row not-found align-content-center text-center justify-items-between">
                    <div className="col-12 align-self-baseline">
                        <h1 className='error'>
                            Oops!
                        </h1>
                    </div>
                    <div className="col-12">
                        <h2>Page <b className='error'>not found</b></h2>
                    </div>
                    <div className="col-12 error">
                        <FontAwesomeIcon size='10x' icon={faBomb}/>
                    </div>
                    <div className="col-12">
                        <h3 className='redirect'>
                            <Link to='/'>
                                <FontAwesomeIcon icon={faChevronLeft}/>
                                <span className="ml-2">Return to home</span>
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotFound;
