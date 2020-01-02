import React from 'react';
import {Helmet} from "react-helmet";

const Contact: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Worlds Apart - Contact</title>
            </Helmet>
            <div id="contact" className="col-md-12">
                <p className="col-xs-12 col-sm-6">
                    <b>Details</b>
                    <br/>
                    <br/> - Worlds Apart.
                    <br/> - Vereda: La Playa.
                    <br/> - Barbosa, Antioquia, Colombia.
                    <br/>+ 57 (300) 549-6013
                    <br/>- <a href="mailto:Worldsapartorganics@gmail.com ">worldsapartorganics@gmail.com</a>
                    <br/>
                    <span className="directions hidden">
                <br/><b>Directions</b>
                <br/>
                <br/>We are located approximately 45 minutes from Medellin.  To get here form Medellin, you'll leave the city form Bello, the city's northern most quadrant.  Head north on route 25, a spacious four; sometimes six lane highway. Follow the road signs Barbosa, continuing as if to arrive in Bucaramanga in a NNE direction.
                <br/>
                </span>

                </p>
                <iframe className="col-xs-12 col-sm-6"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40267.72250284975!2d-75.36307828761437!3d6.469112126453668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnNDkuMiJOIDc1wrAyMCcwNy4xIlc!5e0!3m2!1ses-419!2sco!4v1461606818429"
                        width="100%" height="200px" frameBorder="0" allowFullScreen/>
                <div className="form-area">
                    <form><h3><b>Contact</b> Us</h3>
                    </form>
                </div>
            </div>
            <button type="button" id="submit" name="submit" className="btn btn-primary col-xs-12">
                <i className="fa fa-3x fa-fw fa-envelope-o "/>
                <p>Send an <b>e-mail</b></p>
            </button>
        </React.Fragment>
    )
};

export default Contact;
