import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container-fluid col-xs-12">
                <div className="corner-footer-left "/>
                <div className="corner-footer-right "/>
            </div>
            <div className="container-fluid col-xs-12 footer ">
                <h4 className="text-center"><strong>Worlds Apart</strong></h4>
                <ul className="list-unstyled text-primary col-sm-12 pull-left">
                    <li className="col-sm-4">
                        <i className="fa fa-3x fa-fw fa-mobile"/> +57 (301) 592-35-06
                    </li>
                    <li className="col-sm-4">
                        <i className="fa fa-3x fa-fw fa-envelope-o "/>
                        <a href="mailto:Worldsapartorganics@gmail.com ">Worldsapartorganics@gmail.com
                        </a>
                    </li>
                    <li className="col-sm-4">
                        <a href="https://www.facebook.com/worldsapartorganics/" target="_blank "><i
                            className="fa fa-facebook fa-3x fa-fw "/></a> Worlds apart organic
                    </li>
                </ul>
                <hr className="small"/>
                <div className="container-fluid">
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
        </footer>
    )
};

export default Footer;
