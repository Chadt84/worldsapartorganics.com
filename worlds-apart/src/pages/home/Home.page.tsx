import React from 'react';
import {Helmet} from "react-helmet";

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Worlds Apart - Home</title>
            </Helmet>
            <section id="about" className="container-fluid">
                <div id="myCarousel" className="carousel slide col-xs-12 col-sm-7" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                        <li data-target="#myCarousel" data-slide-to="1"/>
                        <li data-target="#myCarousel" data-slide-to="2"/>
                        <li data-target="#myCarousel" data-slide-to="3"/>
                        <li data-target="#myCarousel" data-slide-to="4"/>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="img/about/1.png" alt="Chania"/>
                        </div>

                        <div className="item">
                            <img src="img/about/2.png" alt="Chania"/>
                        </div>

                        <div className="item">
                            <img src="img/about/3.png" alt="Flower"/>
                        </div>

                        <div className="item">
                            <img src="img/about/4.png" alt="Flower"/>
                        </div>
                        <div className="item">
                            <img src="img/about/6.png" alt="Flower"/>
                        </div>
                    </div>
                </div>
                <p className='col-xs-12 col-sm-5 about-p'>
                    Worlds Apart is an organic farm and bed n' breakfast located in the surrounding hills of Barbosa,
                    Antioquia,
                    Colombia. Our key amenity is the tranquility of this quiet rural community. It is a very peaceful
                    setting to
                    clear your mind and replenish the spirit. The natural geography of the area presents amazing views
                    of the
                    Valley of Aburra. Within short walking distance of the farm you can find several nearby waterfalls
                    with
                    hidden choice swimming pools. Apart from the beauty of the landscape the exotic bird life is nothing
                    short
                    of spectacular.
                    <br/>
                    Futhermore, we are now offering work exchange programs to accommodate travelers interested in
                    taking
                    part in farm production. This recent addition makes us one of the few work farms in
                    Colombia.<br/>Our goal,
                    at Worlds Apart, is to one day be a completely self-sufficient farm with all the comforts of
                    five star
                    lodging. At the moment, what we offer is rustic and humble at best but we're certain you'll find
                    no shortage
                    of hospitality or lack of comfort here at Worlds Apart.
                </p>

            </section>
            <a className="gallery-up visible-xs" href="#gallery-nav">
                <i className="fa fa-arrow-circle-o-up  fa-3x" aria-hidden="true"/>
            </a>
            <section id="gallery" className="col-xs-12 text-center">
                <div id="gallery-nav" className="col-sm-2 nav nav-pills nav-stacked col-xs-12">
                    <li id="gallery-tab-1" role="presentation" className="active"><a>The farm</a></li>
                    <li id="gallery-tab-2" role="presentation"><a>Wildlife</a></li>
                    <li id="gallery-tab-3" role="presentation"><a>The place</a></li>
                </div>
                <div id="gallery1" className="zoom-gallery gallery-active col-sm-10 col-xs-12">
                    <a href="img/gallery/farm/1.png" title="Title 1" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/farm/1.png"/>
                    </a>
                    <a href="img/gallery/farm/2.png" title="Title 2" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/farm/2.png"/>
                    </a>
                    <a href="img/gallery/farm/3.png" title="Title 3" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/farm/3.png"/>
                    </a>
                    <a href="img/gallery/farm/5.png" title="Title 5" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/farm/5.png"/>
                    </a>
                    <a href="img/gallery/farm/6.png" title="Title 6" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/farm/6.png"/>
                    </a>
                    <a href="img/gallery/farm/7.png" title="Title 7" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/farm/7.png"/>
                    </a>
                    <a href="img/gallery/farm/8.png" title="Title 8" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/farm/8.png"/>
                    </a>
                    <a href="img/gallery/farm/9.png" title="Title 9" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/farm/9.png"/>
                    </a>
                    <a href="img/gallery/farm/10.png" title="Title 10" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/farm/10.png"/>
                    </a>
                    <a href="img/gallery/farm/11.png" title="Title 11" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/farm/11.png"/>
                    </a>
                </div>
                <div id="gallery2" className="zoom-gallery gallery-inactive col-sm-10 col-xs-12">
                    <a href="img/gallery/wildlife/1.png" title="Title 1" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/wildlife/1.png"/>
                    </a>
                    <a href="img/gallery/wildlife/2.png" title="Title 2" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/wildlife/2.png"/>
                    </a>
                    <a href="img/gallery/wildlife/5.png" title="Title 3" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/wildlife/5.png"/>
                    </a>
                    <a href="img/gallery/wildlife/6.png" title="Title 4" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/wildlife/6.png"/>
                    </a>
                    <a href="img/gallery/wildlife/8.png" title="Title 5" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/wildlife/8.png"/>
                    </a>
                    <a href="img/gallery/wildlife/11.png" title="Title 8" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/wildlife/11.png"/>
                    </a>
                    <a href="img/gallery/wildlife/13.png" title="Title 7" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/wildlife/13.png"/>
                    </a>
                    <a href="img/gallery/wildlife/14.png" title="Title 8" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/wildlife/14.png"/>
                    </a>
                    <a href="img/gallery/wildlife/15.png" title="Title 7" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/wildlife/15.png"/>
                    </a>
                </div>
                <div id="gallery3" className="zoom-gallery gallery-inactive col-sm-10 col-xs-12">
                    <a href="img/gallery/general/3.png" title="Title 3" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/general/3.png"/>
                    </a>
                    <a href="img/gallery/general/4.png" title="Title 4" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/general/4.png"/>
                    </a>
                    <a href="img/gallery/general/6.png" title="Title 6" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/general/6.png"/>
                    </a>
                    <a href="img/gallery/general/7.png" title="Title 7" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/general/7.png"/>
                    </a>
                    <a href="img/gallery/general/8.png" title="Title 8" className="image-link">
                        <img className='col-xs-6 col-sm-4 col-md-2 polaroid' src="img/gallery/general/8.png"/>
                    </a>
                </div>
            </section>
            <div id="map" className="col-xs-12 map">
            <span className="fa-stack fa-lg col-xs-12 text-center">
                    <i className="fa fa-map fa-stack-2x"/>
                    <i className="fa fa-map-marker fa-stack-1x"/>
                </span>
                <div className="btn btn-map col-xs-12" data-toggle="collapse" data-target="#map-frame">
                    <p className="btn-map-text col-sm-11">Expand <b>map</b></p>
                    <i className="arrow fa fa-angle-double-down fa-2x col-sm-1"/>
                </div>
                <div id="map-frame" className="collapse col-xs-12 map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40267.72250284975!2d-75.36307828761437!3d6.469112126453668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnNDkuMiJOIDc1wrAyMCcwNy4xIlc!5e0!3m2!1ses-419!2sco!4v1461606818429"
                        width="100%" height="600" frameBorder="0" allowFullScreen/>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Home;
