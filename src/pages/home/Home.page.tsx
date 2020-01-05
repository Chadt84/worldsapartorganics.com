import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import Carousel, {CarouselProps} from 'react-bootstrap/Carousel';
// @ts-ignore
import Gallery from 'react-grid-gallery';

import "./Home.page.scss";
import about1 from '../../assets/img/about/1.png';
import about2 from '../../assets/img/about/2.png';
import about3 from '../../assets/img/about/3.png';
import about4 from '../../assets/img/about/4.png';
import about5 from '../../assets/img/about/6.png';

import farm1 from '../../assets/img/gallery/farm/1.png';
import farm2 from '../../assets/img/gallery/farm/2.png';
import farm3 from '../../assets/img/gallery/farm/3.png';
import farm4 from '../../assets/img/gallery/farm/4.png';
import farm5 from '../../assets/img/gallery/farm/5.png';
import farm6 from '../../assets/img/gallery/farm/6.png';
import farm7 from '../../assets/img/gallery/farm/7.png';
import farm8 from '../../assets/img/gallery/farm/8.png';
import farm9 from '../../assets/img/gallery/farm/9.png';
import farm10 from '../../assets/img/gallery/farm/10.png';
import farm11 from '../../assets/img/gallery/farm/11.png';

import wildlife1 from '../../assets/img/gallery/wildlife/1.png';
import wildlife2 from '../../assets/img/gallery/wildlife/2.png';
import wildlife3 from '../../assets/img/gallery/wildlife/5.png';
import wildlife4 from '../../assets/img/gallery/wildlife/6.png';
import wildlife5 from '../../assets/img/gallery/wildlife/8.png';
import wildlife6 from '../../assets/img/gallery/wildlife/11.png';
import wildlife7 from '../../assets/img/gallery/wildlife/13.png';
import wildlife8 from '../../assets/img/gallery/wildlife/14.png';
import wildlife9 from '../../assets/img/gallery/wildlife/15.png';

import place1 from '../../assets/img/gallery/general/3.png';
import place2 from '../../assets/img/gallery/general/4.png';
import place3 from '../../assets/img/gallery/general/6.png';
import place4 from '../../assets/img/gallery/general/7.png';
import place5 from '../../assets/img/gallery/general/8.png';

enum GALLERIES {
    FARM = 'farm',
    WILDLIFE = 'wildlife',
    PLACE = 'place'
}

const carouselItems: {
    options?: CarouselProps,
    img: string,
    caption?: {
        label: string,
        description: string
    }
}[] =
    [
        {
            img: about1,
            caption: {
                label: '',
                description: ''
            }
        }, {
        img: about2,
        caption: {
            label: '',
            description: ''
        }
    },
        {
            img: about3,
            caption: {
                label: '',
                description: ''
            }
        },
        {
            img: about4,
            caption: {
                label: '',
                description: ''
            }
        },
        {
            img: about5,
            caption: {
                label: '',
                description: ''
            }
        },
    ];
const galleries: any = {
    farmGalleryItems:
        [
            {
                src: farm1,
                thumbnail: farm1,
            },
            {
                src: farm2,
                thumbnail: farm2,
            },
            {
                src: farm3,
                thumbnail: farm3,
            },
            {
                src: farm4,
                thumbnail: farm4,
            },
            {
                src: farm5,
                thumbnail: farm5,
            },
            {
                src: farm6,
                thumbnail: farm6,
            },
            {
                src: farm7,
                thumbnail: farm7,
            },
            {
                src: farm8,
                thumbnail: farm8,
            },
            {
                src: farm9,
                thumbnail: farm9,
            },
            {
                src: farm10,
                thumbnail: farm10,
            },
            {
                src: farm11,
                thumbnail: farm11,
            }
        ],
    wildlifeGalleryItems:
        [
            {
                src: wildlife1,
                thumbnail: wildlife1,
            },
            {
                src: wildlife2,
                thumbnail: wildlife2,
            },
            {
                src: wildlife3,
                thumbnail: wildlife3,
            },
            {
                src: wildlife4,
                thumbnail: wildlife4,
            },
            {
                src: wildlife5,
                thumbnail: wildlife5,
            },
            {
                src: wildlife6,
                thumbnail: wildlife6,
            },
            {
                src: wildlife7,
                thumbnail: wildlife7,
            },
            {
                src: wildlife8,
                thumbnail: wildlife8,
            },
            {
                src: wildlife9,
                thumbnail: wildlife9,
            }
        ],
    placeGalleryItems:
        [
            {
                src: place1,
                thumbnail: place1,
            },
            {
                src: place2,
                thumbnail: place2,
            },
            {
                src: place3,
                thumbnail: place3,
            },
            {
                src: place4,
                thumbnail: place4,
            },
            {
                src: place5,
                thumbnail: place5,
            }
        ],
};

const Home: React.FC = () => {
    const [mapCollapsed, setMapCollapsed] = useState(true);
    const [selectedGallery, setSelectedGallery] = useState(GALLERIES.FARM);
    const toggleMap = () => {
        setMapCollapsed(!mapCollapsed);
    };
    const selectGallery = (gallery: GALLERIES = GALLERIES.FARM) => {
        setSelectedGallery(gallery);
    };

    const [margin, cols] = [10, 3];
    const handleThumbnail = function () {
        const $grid = document.getElementById('ReactGridGallery');
        const maxWidth = (($grid ? $grid.offsetWidth : 190) / cols) - (cols * (margin + 10));
        return {
            background: 'black',
            maxWidth: `${maxWidth}px`,
        }
    };
    const handleTileViewport = function () {
        return {
            background: 'white',
            padding: '5px',
            cursor: 'pointer',
            borderRadius: '2px',
            boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.75)',
            marginRight: `${margin}px`,
            marginBottom: `${margin}px`,
        }
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Worlds apart - Home</title>
            </Helmet>
            <section className="container-fluid">
                <div className="row align-items-start">
                    <Carousel className="col-12 col-sm-6">
                        {
                            carouselItems.map(({img, caption, options}) => {
                                const {label, description} = caption || {};
                                return (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={img}
                                            alt={label}
                                        />
                                        <Carousel.Caption>
                                            <h3>{label}</h3>
                                            <p>{description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    <p className='col-xs-12 col-sm-6 p-5 text-justify about-p'>
                        Worlds Apart is an organic farm and bed n' breakfast located in the surrounding hills of
                        Barbosa,
                        Antioquia,
                        Colombia. Our key amenity is the tranquility of this quiet rural community. It is a very
                        peaceful
                        setting to
                        clear your mind and replenish the spirit. The natural geography of the area presents amazing
                        views
                        of the
                        Valley of Aburra. Within short walking distance of the farm you can find several nearby
                        waterfalls
                        with
                        hidden choice swimming pools. Apart from the beauty of the landscape the exotic bird life is
                        nothing
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
                </div>
            </section>
            <div className="container-fluid">
                <div className="row">
                    <a className="gallery-up visible-xs" href="#gallery-nav">
                        <i className="fa fa-arrow-circle-o-up  fa-3x" aria-hidden="true"/>
                    </a>
                    <section id="gallery" className="col-12 text-center container-fluid">
                        <div className="row align-items-start">
                            <div id="gallery-nav" className="container-fluid col-auto nav-pills nav-stacked ">
                                <div className="row">
                                    <li
                                        onClick={() => selectGallery(GALLERIES.FARM)}
                                        className={`${selectedGallery === GALLERIES.FARM ? 'active' : ''} col-12`}>
                                        The farm
                                    </li>
                                    <li
                                        onClick={() => selectGallery(GALLERIES.WILDLIFE)}
                                        className={`${selectedGallery === GALLERIES.WILDLIFE ? 'active' : ''} col-12`}
                                    >Wildlife
                                    </li>
                                    <li
                                        onClick={() => selectGallery(GALLERIES.PLACE)}
                                        className={`${selectedGallery === GALLERIES.PLACE ? 'active' : ''} col-12`}
                                    >The place
                                    </li>
                                </div>
                            </div>
                            <div className="col gallery-active">
                                <Gallery
                                    rowHeight={110}
                                    margin={0}
                                    images={galleries[`${selectedGallery}GalleryItems`]}
                                    backdropClosesModal={true}
                                    tileViewportStyle={handleTileViewport}
                                    thumbnailStyle={handleThumbnail}
                                    enableImageSelection={false}/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container-fluid">
                <div id="map" className="row map">
                    <span className="fa-stack fa-lg col-12 text-center">
                        <i className="fa fa-map fa-stack-2x"/>
                        <i className="fa fa-map-marker fa-stack-1x"/>
                    </span>
                    <div className="btn btn-map col-12" onClick={toggleMap}>
                        <p className="btn-map-text">{mapCollapsed ? 'Show' : 'Hide'} <b className="text-white">map</b></p>
                        <i className={`${mapCollapsed ? 'fa-angle-double-down' : 'fa-angle-double-up'} arrow fa fa-2x col-sm-1`}/>
                    </div>
                    <div className={`${mapCollapsed ? 'collapse' : ''} col-12 map`}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40267.72250284975!2d-75.36307828761437!3d6.469112126453668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnNDkuMiJOIDc1wrAyMCcwNy4xIlc!5e0!3m2!1ses-419!2sco!4v1461606818429"
                            frameBorder="0" allowFullScreen/>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};

export default Home;
