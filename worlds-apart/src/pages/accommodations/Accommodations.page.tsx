import React from 'react';
import {Helmet} from "react-helmet";

const Accommodations: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Worlds Apart - Accommodations</title>
            </Helmet>
            <div className="cabin-title col-xs-12">The <b>cabins</b></div>
            <div className='row col-xs-12'>
                <div className='span12'>
                    <hr/>
                </div>
            </div>
            <div className="col-xs-12 cabin-text">
                <div id="myCarousel" className="carousel slide col-xs-12 col-sm-6" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                        <li data-target="#myCarousel" data-slide-to="1"/>
                        <li data-target="#myCarousel" data-slide-to="2"/>
                        <li data-target="#myCarousel" data-slide-to="3"/>
                        <li data-target="#myCarousel" data-slide-to="4"/>
                        <li data-target="#myCarousel" data-slide-to="5"/>
                        <li data-target="#myCarousel" data-slide-to="6"/>
                        <li data-target="#myCarousel" data-slide-to="7"/>
                        <li data-target="#myCarousel" data-slide-to="8"/>
                        <li data-target="#myCarousel" data-slide-to="9"/>
                        <li data-target="#myCarousel" data-slide-to="10"/>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="img/cabin/1.JPG" alt="Lounge"/>
                        </div>

                        <div className="item">
                            <img src="img/cabin/2.JPG" alt="Kitchen"/>
                        </div>

                        <div className="item">
                            <img src="img/cabin/3.JPG" alt="Kitchen"/>
                        </div>

                        <div className="item">
                            <img src="img/cabin/4.JPG" alt="Bathroom"/>
                        </div>
                        <div className="item">
                            <img src="img/cabin/5.jpeg" alt="Bathroom"/>
                        </div>
                        <div className="item">
                            <img src="img/cabin/6.JPG" alt="Cabin"/>
                        </div>

                        <div className="item">
                            <img src="img/cabin/7.JPG" alt="Roaster"/>
                        </div>

                        <div className="item">
                            <img src="img/cabin/8.JPG" alt="Cabin"/>
                        </div>
                        <div className="item">
                            <img src="img/cabin/9.JPG" alt="kiosko"/>
                        </div>
                        <div className="item">
                            <img src="img/cabin/10.JPG" alt="Bar"/>
                        </div>
                        <div className="item">
                            <img src="img/cabin/11.JPG" alt="Jacuzzi"/>
                        </div>
                    </div>
                </div>
                <p className="col-sm-6 col-xs-12">
                    Our cabins are fully independent, ideal for travelling couples or anyone who would prefer a little
                    extra privacy. They are equipped with an electric stove and small refrigerator so guests
                    may prepare food to their liking. If you're feeling up to some outdoor cooking there is a communal
                    BBQ on
                    site as well, which we strongly recommend. Just steps away from the cabin you'll find the gazebo or
                    kiosko.
                    This space is furnished with a ping pong table and small bar.
                    It is a great place to relax, do some outdoor dinning, or enjoy some cocktails. From
                    the gazebo you'll have a great view of all of Barbosa and our adjacent basketball court, great for
                    three on
                    three
                    tournaments or just shooting around.
                </p>
            </div>
            <div className="cabin-pricing col-xs-12">
                <div className="col-xs-6 col-sm-4 cabin-price">
                    <p className="col-xs-12 text-center"><b>COP $98.000</b></p>
                    <p className="col-xs-12 text-center">Per night/person</p>
                </div>
                <a href="contact.html">
                    <div className="col-xs-6 col-sm-8 text-center cabin-button"><b>Book</b> <span
                        className="ml-1">now</span></div>
                </a>
            </div>
            <div className="cabin-title col-xs-12">The <b>main</b> house</div>
            <div className='row col-xs-12'>
                <div className='span12'>
                    <hr/>
                </div>
            </div>
            <div className="col-xs-12 cabin-text">
                <div id="myCarousel2" className="carousel slide col-xs-12 col-sm-6" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel2" data-slide-to="0" className="active"/>
                        <li data-target="#myCarousel2" data-slide-to="1"/>
                        <li data-target="#myCarousel2" data-slide-to="2"/>
                        <li data-target="#myCarousel2" data-slide-to="3"/>
                        <li data-target="#myCarousel2" data-slide-to="4"/>
                        <li data-target="#myCarousel2" data-slide-to="5"/>
                        <li data-target="#myCarousel2" data-slide-to="6"/>
                        <li data-target="#myCarousel2" data-slide-to="7"/>
                        <li data-target="#myCarousel2" data-slide-to="8"/>
                        <li data-target="#myCarousel2" data-slide-to="9"/>
                        <li data-target="#myCarousel2" data-slide-to="10"/>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="img/cabin/1.JPG" alt="Lounge"/>
                        </div>

                        <div className="item">
                            <img src="img/cabin/2.JPG" alt="Kitchen"/>
                        </div>

                        <div className="item">
                            <img src="img/cabin/3.JPG" alt="Kitchen"/>
                        </div>

                        <div className="item">
                            <img src="img/cabin/4.JPG" alt="Bathroom"/>
                        </div>
                        <div className="item">
                            <img src="img/cabin/5.jpeg" alt="Bathroom"/>
                        </div>
                        <div className="item">
                            <img src="img/cabin/6.JPG" alt="Cabin"/>
                        </div>

                        <div className="item">
                            <img src="img/cabin/7.JPG" alt="Roaster"/>
                        </div>

                        <div className="item">
                            <img src="img/cabin/8.JPG" alt="Cabin"/>
                        </div>
                        <div className="item">
                            <img src="img/cabin/9.JPG" alt="kiosko"/>
                        </div>
                        <div className="item">
                            <img src="img/cabin/10.JPG" alt="Bar"/>
                        </div>
                        <div className="item">
                            <img src="img/cabin/11.JPG" alt="Jacuzzi"/>
                        </div>
                    </div>
                </div>
                <p className="col-sm-6 col-xs-12">
                    Our cabins are fully independent, ideal for travelling couples or anyone who would prefer a little
                    extra privacy. They are equipped with an electric stove and small refrigerator so guests
                    may prepare food to their liking. If you're feeling up to some outdoor cooking there is a communal
                    BBQ on
                    site as well, which we strongly recommend. Just steps away from the cabin you'll find the gazebo or
                    kiosko.
                    This space is furnished with a ping pong table and small bar.
                    It is a great place to relax, do some outdoor dinning, or enjoy some cocktails. From
                    the gazebo you'll have a great view of all of Barbosa and our adjacent basketball court, great for
                    three on
                    three
                    tournaments or just shooting around.
                </p>
            </div>
            <div className="cabin-pricing col-xs-12">
                <div className="col-xs-6 col-sm-4 cabin-price">
                    <p className="col-xs-12 text-center"><b>COP $48.000</b></p>
                    <p className="col-xs-12 text-center">Per night/person</p>
                    <p className="col-xs-12 text-center"><b>COP $98.000</b></p>
                    <p className="col-xs-12 text-center">Per night/Private room</p>
                </div>
                <a href="contact.html">
                    <div className="col-xs-6 col-sm-8 text-center cabin-button"><b>Book</b> <span
                        className="ml-1">now</span></div>
                </a>
            </div>
        </React.Fragment>
    )
};

export default Accommodations;
