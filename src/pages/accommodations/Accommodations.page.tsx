import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import "./Accommodations.page.scss";

import Cabin1 from "../../assets/img/cabin/1.jpg";
import Cabin2 from "../../assets/img/cabin/2.jpg";
import Cabin3 from "../../assets/img/cabin/3.jpg";
import Cabin4 from "../../assets/img/cabin/4.jpg";
import Cabin5 from "../../assets/img/cabin/5.jpeg";
import Cabin6 from "../../assets/img/cabin/6.jpg";
import Cabin7 from "../../assets/img/cabin/7.jpg";
import Cabin8 from "../../assets/img/cabin/8.jpg";
import Cabin9 from "../../assets/img/cabin/9.jpg";
import Cabin10 from "../../assets/img/cabin/10.jpg";
import Cabin11 from "../../assets/img/cabin/11.jpg";

const cabinCarouselItems: {
    img: string,
    caption?: {
        label: string,
        description: string
    }
}[] =
    [
        {
            img: Cabin1,
            caption: {
                label: '',
                description: ''
            }
        }, {
        img: Cabin2,
        caption: {
            label: '',
            description: ''
        }
    }, {
        img: Cabin3,
        caption: {
            label: '',
            description: ''
        }
    }, {
        img: Cabin4,
        caption: {
            label: '',
            description: ''
        }
    }, {
        img: Cabin5,
        caption: {
            label: '',
            description: ''
        }
    }, {
        img: Cabin6,
        caption: {
            label: '',
            description: ''
        }
    }, {
        img: Cabin7,
        caption: {
            label: '',
            description: ''
        }
    }, {
        img: Cabin8,
        caption: {
            label: '',
            description: ''
        }
    }, {
        img: Cabin9,
        caption: {
            label: '',
            description: ''
        }
    }, {
        img: Cabin10,
        caption: {
            label: '',
            description: ''
        }
    }, {
        img: Cabin11,
        caption: {
            label: '',
            description: ''
        }
    }
    ];

interface AccommodationProps {
    carousel: any[],
    title?: string
}

const Accommodation: React.FC<AccommodationProps> = ({children, carousel, title = ''}) => {
    const toSplice = title.split(' ');
    const spliced = toSplice.pop();
    return (
        <div className="row">
            <div className="cabin-title col-12">{toSplice.join(' ')} <b>{spliced}</b></div>
            <div className='col-12 mb-3'>
                <hr/>
            </div>
            <div className="col-12 col-sm-6">
                <ImageGallery
                    items={carousel.map((x: any) => ({
                        ...x,
                        original: x.img,
                        thumbnail: x.img
                    }))}
                    lazyLoad={true}
                    showPlayButton={false}
                    showBullets={true}
                    showIndex={true}
                    autoPlay={true}
                    slideDuration={1000}
                    renderLeftNav={(onClick, isDisabled) => (
                        <button
                            className="btn btn-clear image-gallery-button left"
                            disabled={isDisabled}
                            onClick={onClick}>
                            <i className="fa fa-chevron-left"/>
                        </button>
                    )}
                    renderRightNav={(onClick, isDisabled) => (
                        <button
                            className="btn btn-clear image-gallery-button right"
                            disabled={isDisabled}
                            onClick={onClick}>
                            <i className="fa fa-chevron-right"/>
                        </button>
                    )}
                    renderFullscreenButton={(onClick, isFullScreen) => {
                        return (
                            <button
                                type='button'
                                className={
                                    `btn btn-clear image-gallery-fullScreen-button ${isFullScreen ? ' active' : ''}`}
                                onClick={onClick}
                            >
                                <i className={`fa fa-${isFullScreen ? 'collapse' : 'expand'}`}/>
                            </button>
                        );
                    }}
                    renderThumbInner={(img: any) => {
                        return (
                            <img className="image-gallery-thumbnail-image" src={img.thumbnail} alt=""/>
                        )
                    }}
                />
            </div>
            <div className="col-12 col-sm-6 cabin-text pr-5">
                {children}
            </div>
        </div>
    )
};

const Accommodations: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Worlds apart - Accommodations</title>
            </Helmet>
            <div className="container pt-3">
                <Accommodation title='The cabins' carousel={cabinCarouselItems}>
                    <p>
                        Our cabins are fully independent, ideal for travelling couples or anyone who would
                        prefer a
                        little
                        extra privacy. They are equipped with an electric stove and small refrigerator so guests
                        may prepare food to their liking. If you're feeling up to some outdoor cooking there is
                        a
                        communal
                        BBQ on
                        site as well, which we strongly recommend. Just steps away from the cabin you'll find
                        the
                        gazebo or
                        kiosko.
                        This space is furnished with a ping pong table and small bar.
                        It is a great place to relax, do some outdoor dinning, or enjoy some cocktails. From
                        the gazebo you'll have a great view of all of Barbosa and our adjacent basketball court,
                        great for
                        three on
                        three
                        tournaments or just shooting around.
                    </p>
                    <div className="col-12 cabin-price">
                        <p className="col-12 text-center"><b>COP $98.000</b></p>
                        <p className="col-12 text-center">Per night/person</p>
                    </div>
                </Accommodation>
                <Accommodation title='The main house' carousel={cabinCarouselItems}>
                    <p>
                        Our cabins are fully independent, ideal for travelling couples or anyone who would
                        prefer a
                        little
                        extra privacy. They are equipped with an electric stove and small refrigerator so guests
                        may prepare food to their liking. If you're feeling up to some outdoor cooking there is
                        a
                        communal
                        BBQ on
                        site as well, which we strongly recommend. Just steps away from the cabin you'll find
                        the
                        gazebo or
                        kiosko.
                        This space is furnished with a ping pong table and small bar.
                        It is a great place to relax, do some outdoor dinning, or enjoy some cocktails. From
                        the gazebo you'll have a great view of all of Barbosa and our adjacent basketball court,
                        great for
                        three on
                        three
                        tournaments or just shooting around.
                    </p>
                    <div className="col-12 cabin-price">
                        <p className="col-12 text-center"><b>COP $48.000</b></p>
                        <p className="col-12 text-center">Per night/person</p>
                        <p className="col-12 text-center"><b>COP $98.000</b></p>
                        <p className="col-12 text-center">Per night/Private room</p>
                    </div>
                </Accommodation>
                <div className="row">
                    <div className="cabin-pricing col-12">
                        <Link to='/contact'>
                            <div className="col text-center cabin-button">
                                <i className="fa fa-book mr-2"/>
                                <b>Book</b> <span>now</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Accommodations;
