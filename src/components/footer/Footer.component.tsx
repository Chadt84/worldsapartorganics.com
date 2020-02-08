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
                    <div className="row container-fluid mt-3">
                        <div className="row m-0 p-0 contentCopy align-items-center">
                            <p className="col-auto m-0">Copyright ©</p>
                            <div className='col-auto'>
                                <a href="http://mariaviiia.com" target="_blank">
                                    <img src="http://mariaviiia.com/static/media/LOGO.3db595a5.svg" className="copyright"/>
                                </a>
                            </div>
                            <div className="col-auto">
                                <a href="https://alejandrochvs.com" target="_blank">
                                    <img src="https://alejandrochvs.com/assets/logo.png" className="copyright"/>
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
