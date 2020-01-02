import React from 'react';
import './Footer.component.scss';

const Footer: React.FC = () => {
    return (
        <footer className="container-fluid">
            <div className="corner-footer-left "/>
            <div className="row footer">
                <div className="container-fluid">
                    <div className="row">
                        <h5 className="text-center col-12"><strong>Worlds Apart</strong></h5>
                        <div className="col-12 container-fluid">
                            <ul className="list-unstyled text-primary row">
                                <li className="col d-flex align-items-center">
                                    <i className="fa fa-3x fa-fw fa-mobile"/> +57 (301) 592-35-06
                                </li>
                                <li className="col">
                                    <a className=" d-flex align-items-center"
                                       href="mailto:Worldsapartorganics@gmail.com ">
                                        <i className="fa fa-3x fa-fw fa-envelope-o "/>
                                        <span>worldsapartorganics@gmail.com</span>
                                    </a>
                                </li>
                                <li className="col">
                                    <a className="d-flex align-items-center"
                                       href="https://www.facebook.com/worldsapartorganics/" target="_blank "><i
                                        className="fa fa-facebook fa-3x fa-fw"/>Worlds apart organic</a>
                                </li>
                                <li className="col">
                                    <a className="d-flex align-items-center"
                                       href="https://www.instagram.com/worldsaparthostel/" target="_blank "><i
                                        className="fa fa-instagram fa-3x fa-fw"/>Worlds apart organic</a>
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
