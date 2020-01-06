import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import Carousel from 'react-bootstrap/Carousel';
import * as _ from 'lodash';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
// @ts-ignore
import Gallery from 'react-grid-gallery';

import "./Home.page.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMap} from "@fortawesome/free-regular-svg-icons/faMap";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";
import {faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons/faAngleDoubleUp";
import {contentfulClient} from "../../api.context";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons/faCircleNotch";

const Home: React.FC = () => {
    const [mapCollapsed, setMapCollapsed] = useState(true);
    const [selectedGallery, setSelectedGallery] = useState('');
    const [margin, cols] = [10, 3];
    const [home, setHome] = useState<any>({});
    const [galleries, setGalleries] = useState<any>([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        loadHome();
        loadGallery();
    }, []);

    const loadHome = async () => {
        let {items}: any = await contentfulClient.getEntries({
            'content_type': 'home',
            order: 'sys.createdAt'
        });
        let newHome = items.map((item: any) => ({...item.fields, id: item.sys.id}))[0];
        let {gallery} = newHome;
        for (let j = 0; j < gallery.length; j++) {
            let photo = gallery[j];
            photo = {id: photo.sys.id, ...photo.fields};
            const res = await contentfulClient.getAsset(photo.id);
            gallery[j] = {...photo, img: `https:${res?.fields?.file?.url}`};
        }
        setHome(newHome);
        setHasLoaded(true);
    };

    const loadGallery = async () => {
        let {items}: any = await contentfulClient.getEntries({
            'content_type': 'gallery',
            order: 'sys.createdAt'
        });
        const newGalleries = items.map(({fields}: any) => ({...fields}));
        setSelectedGallery(newGalleries[0].group);
        setGalleries(newGalleries);
    };

    const toggleMap = () => {
        setMapCollapsed(!mapCollapsed);
    };

    const selectGallery = (gallery: string) => {
        setSelectedGallery(gallery);
    };

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
            {!hasLoaded && (<div className="loading-activities">
                <div className="d-block text-center">
                    <FontAwesomeIcon spin={true} icon={faCircleNotch}/>
                    <div className="text-muted">Loading home...</div>
                </div>
            </div>)}
            {hasLoaded && (
                <>
                    <section className="container-fluid" id="about">
                        <div className="row align-items-start">
                            <Carousel className="col-12 col-sm-6">
                                {
                                    home.gallery.map(({img, title, description}: any) => {
                                        return (
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={img}
                                                    alt={title}
                                                />
                                                <Carousel.Caption>
                                                    <p>{description}</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                            <p className='col-xs-12 col-sm-6 p-5 text-justify about-p'>
                                {documentToReactComponents(home.description)}
                            </p>
                        </div>
                    </section>
                    <div className="container-fluid" id="gallery">
                        <div className="row">
                            <section className="col-12 text-center container-fluid">
                                <div className="row align-items-start">
                                    <div id="gallery-nav"
                                         className="container-fluid col-12 col-sm-auto nav-pills nav-stacked">
                                        <div className="row">
                                            {
                                                galleries.map(({group, title}: any) => (
                                                    <li
                                                        className={selectedGallery === group ? 'active' : ''}
                                                        onClick={() => selectGallery(group)}>
                                                        {title}
                                                    </li>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm gallery-active">
                                        <Gallery
                                            rowHeight={110}
                                            margin={0}
                                            images={
                                                _.find(galleries, ({group}) => group === selectedGallery)
                                                    .gallery
                                                    .map(({fields}: any) => ({
                                                        src: `https:${fields.file.url}`,
                                                        thumbnail: `https:${fields.file.url}`,
                                                    }))}
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
                        <FontAwesomeIcon className="fa-stack-2x" icon={faMap}/>
                    </span>
                            <div className="btn btn-map col-12" onClick={toggleMap}>
                                <p className="btn-map-text">
                                    {mapCollapsed ? 'Show' : 'Hide'} <b className="text-white">map</b>
                                </p>
                                <FontAwesomeIcon size="2x" icon={mapCollapsed ? faAngleDoubleDown : faAngleDoubleUp}/>
                            </div>
                            <div className={`${mapCollapsed ? 'collapse' : ''} col-12 map`}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40267.72250284975!2d-75.36307828761437!3d6.469112126453668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnNDkuMiJOIDc1wrAyMCcwNy4xIlc!5e0!3m2!1ses-419!2sco!4v1461606818429"
                                    frameBorder="0" allowFullScreen/>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </React.Fragment>
    )
};

export default Home;
