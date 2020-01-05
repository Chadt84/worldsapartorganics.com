import React from 'react';
import {Helmet} from "react-helmet";
import "./Contact.page.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen} from "@fortawesome/free-regular-svg-icons/faEnvelopeOpen";

const Contact: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Worlds apart - Contact</title>
            </Helmet>
            <div className="container  pt-3">
                <div className="row">
                    <p className="col-12 col-sm-6">
                        <b>Details</b>
                        <br/> - Worlds Apart.
                        <br/> - Vereda: La Playa.
                        <br/> - Barbosa, Antioquia, Colombia.
                        <br/>+ 57 (300) 549-6013
                        <br/>- <a href="mailto:Worldsapartorganics@gmail.com ">worldsapartorganics@gmail.com</a>
                        <br/>
                    </p>
                    <p className="col-12 directions d-none">
                        <b>Directions</b> <br/>We are located approximately 45 minutes from Medellin. To get here form
                        Medellin, you'll leave the city form Bello, the city's northern most quadrant. Head north on
                        route 25, a spacious four; sometimes six lane highway. Follow the road signs Barbosa, continuing
                        as if to arrive in Bucaramanga in a NNE direction.
                    </p>
                    <iframe className="col-12 col-sm-6"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40267.72250284975!2d-75.36307828761437!3d6.469112126453668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnNDkuMiJOIDc1wrAyMCcwNy4xIlc!5e0!3m2!1ses-419!2sco!4v1461606818429"
                            width="100%" height="200px" frameBorder="0" allowFullScreen/>
                </div>
                <div className="row">
                    <div className="form-area col-12 text-center mt-3">
                        <form>
                            <h3><b>Contact</b> Us</h3>
                        </form>
                    </div>
                </div>
            </div>
            <button type="button" id="submit" name="submit" className="btn btn-primary col-12 mt-2">
                <FontAwesomeIcon size="3x" icon={faEnvelopeOpen}/>
                <p>Send an <b className="text-white">e-mail</b></p>
            </button>
        </React.Fragment>
    )
};

export default Contact;
