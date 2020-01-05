import React, {useEffect, useState} from 'react';
import * as _ from 'lodash';
import './Footer.component.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobile} from "@fortawesome/free-solid-svg-icons/faMobile";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";

const Footer: React.FC = () => {
    const [pagePadding, setPagePadding] = useState(32);
    const cornersFactor = 1.25;

    const calculateOffset = () => {
        const $page = document.getElementById('main-content');
        setPagePadding($page ? $page.offsetLeft : pagePadding);
    };

    useEffect(() => {
        calculateOffset();
        window.addEventListener('resize', _.throttle(calculateOffset, 100));
        return () => {
            window.removeEventListener('resize', _.throttle(calculateOffset, 100));
        }
    });
    return (
        <footer className="container-fluid position-relative">
            <div
                style={{
                    borderRightWidth: pagePadding,
                    borderBottomWidth: pagePadding / cornersFactor,
                    top: -pagePadding / cornersFactor
                }}
                className="corner-footer-left"/>
            <div
                style={{
                    borderLeftWidth: pagePadding,
                    borderBottomWidth: pagePadding / cornersFactor,
                    top: -pagePadding / cornersFactor
                }}
                className="corner-footer-right"/>
            <div className="row footer">
                <div className="container-fluid">
                    <div className="row">
                        <h5 className="text-center col-12"><strong>Worlds Apart</strong></h5>
                        <div className="col-12 container-fluid">
                            <ul className="list-unstyled text-primary row">
                                <li className="col d-flex align-items-center">
                                    <FontAwesomeIcon size="2x" icon={faMobile}/>
                                    <span className="ml-2">+57 (300) 549-60-13</span>
                                </li>
                                <li className="col">
                                    <a className=" d-flex align-items-center"
                                       href="mailto:Worldsapartorganics@gmail.com ">
                                        <FontAwesomeIcon size="2x" icon={faEnvelopeOpen}/>
                                        <span className="ml-2">worldsapartorganics@gmail.com</span>
                                    </a>
                                </li>
                                <li className="col">
                                    <a className="d-flex align-items-center"
                                       href="https://www.facebook.com/worldsapartorganics/" target="_blank ">
                                        <FontAwesomeIcon size="2x" icon={faFacebook}/>
                                        <span className="ml-2">Worlds apart organics, farm and bed n'breakfast</span>
                                    </a>
                                </li>
                                <li className="col">
                                    <a className="d-flex align-items-center"
                                       href="https://www.instagram.com/worldsaparthostel/" target="_blank ">
                                        <FontAwesomeIcon size="2x" icon={faInstagram}/>
                                        <span className="ml-2">Worlds apart eco hotel</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr/>
                    </div>
                    <div className="row container-fluid">
                        <div className="row m-0 p-0 contentCopy">
                            <p>Copyright ©</p>
                            <div className='col'>
                                <a href="http://mariaviiia.com" target="_blank">
                                    <img src="img/MariaLogo.png" className="Copyright"/>
                                </a>
                            </div>
                            <div className="col">
                                <a href="http://www.alejandrochvs.com" target="_blank">
                                    <img src="img/AlejoLogo.png" className="CopyrightAlejo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
