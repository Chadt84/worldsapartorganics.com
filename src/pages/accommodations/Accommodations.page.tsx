import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import "./Accommodations.page.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand} from "@fortawesome/free-solid-svg-icons/faExpand";
import {faCompress} from "@fortawesome/free-solid-svg-icons/faCompress";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {contentfulClient} from "../../api.context";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons/faCircleNotch";

interface AccommodationProps {
    gallery: any[],
    title: string,
    content: any,
    id: string
}

const Accommodation: React.FC<AccommodationProps> = ({content, gallery, title, id}) => {
    const toSplice = title.split(' ');
    const spliced = toSplice.pop();
    return (
        <div className="row" id={id}>
            <div className="cabin-title col-12">{toSplice.join(' ')} <b>{spliced}</b></div>
            <div className='col-12 mb-3'>
                <hr/>
            </div>
            <div className="col-12 col-sm-6">
                <ImageGallery
                    items={gallery}
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
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </button>
                    )}
                    renderRightNav={(onClick, isDisabled) => (
                        <button
                            className="btn btn-clear image-gallery-button right"
                            disabled={isDisabled}
                            onClick={onClick}>
                            <FontAwesomeIcon icon={faChevronRight}/>
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
                                <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand}/>
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
                {documentToReactComponents(content)}
            </div>
        </div>
    )
};

const Accommodations: React.FC = () => {
    const [accommodations, setAccommodations] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const loadAccommodations = async () => {
        let {items}: any = await contentfulClient.getEntries({
            'content_type': 'accommodation',
            order: 'sys.createdAt'
        });
        let newAccommodations = items.map((item: any) => ({...item.fields, id: item.sys.id}));
        for (let i = 0; i < newAccommodations.length; i++) {
            let gallery = newAccommodations[i].gallery;
            for (let j = 0; j < gallery.length; j++) {
                let photo = gallery[j];
                photo = {id: photo.sys.id, ...photo.fields};
                const res = await contentfulClient.getAsset(photo.id);
                const img = `https:${res?.fields?.file?.url}`;
                gallery[j] = {...photo, thumbnail: img, original: img};
            }
        }
        setAccommodations(newAccommodations);
        setHasLoaded(true);
    };
    useEffect(() => {
        loadAccommodations()
    }, []);
    return (
        <React.Fragment>
            <Helmet>
                <title>Worlds apart - Accommodations</title>
            </Helmet>
            {!hasLoaded && (<div className="loading-activities">
                <div className="d-block text-center">
                    <FontAwesomeIcon spin={true} icon={faCircleNotch}/>
                    <div className="text-muted">Loading accommodations...</div>
                </div>
            </div>)}
            <div className="container pt-3">
                {
                    accommodations.map((accommodation: any, index: number) => (
                        <Accommodation
                            key={accommodation.id}
                            id={accommodation.title.replace(/\s+/g, '-').toLowerCase()}
                            {...accommodation}
                        />
                    ))
                }
                <div className="row">
                    <div className="cabin-pricing col-12">
                        <Link to='/contact'>
                            <div className="col text-center cabin-button">
                                <FontAwesomeIcon className="mr-2" icon={faBook}/>
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
