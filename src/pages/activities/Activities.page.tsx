import React, {useEffect, useState} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {Helmet} from "react-helmet";
import {Parallax} from 'react-parallax';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import "./Activities.page.scss"

import {contentfulClient} from "../../api.context";

const strength = 200;

const Activity: React.FC<{
    background: any,
    name: string,
    content: any
}> = ({background, name, content}) => {
    const children = documentToReactComponents(content);
    const image = `https:${background?.fields?.file?.url}`;
    return (
        <Parallax
            className="container-fluid"
            bgImage={image}
            bgImageAlt={background?.fields?.title || ''}
            strength={strength}
            key={name + Math.random()}
        >
            <div className="row align-items-center align-content-center parallax-window"
                 id={name.replace(/\s+/g, '-').toLowerCase()}>
                <div className="col-5 text-activities-left">
                    <div className="title-activities col-12">{name}</div>
                    {children}
                </div>
            </div>
        </Parallax>
    )
};

const Activities: React.FC = () => {
    const [activities, setActivities] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const getActivities = async () => {
        let {items}: any = await contentfulClient.getEntries({
            'content_type': 'ativity',
            order: 'sys.createdAt'
        });
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item?.fields?.background?.sys) {
                item.fields.background = await contentfulClient.getAsset(item.fields.background.sys.id);
            }
        }
        setActivities(items.map(({fields, sys}: any) => ({
            ...fields,
            id: sys.id
        })));
        setHasLoaded(true);
    };

    useEffect(() => {
        getActivities();
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>Worlds apart - Activities</title>
            </Helmet>
            {!hasLoaded && (<div className="loading-activities">
                <div className="d-block text-center">
                    <FontAwesomeIcon spin={true} icon={faCircleNotch}/>
                    <div className="text-muted">Loading activities...</div>
                </div>
            </div>)}
            {activities.map((activity, i) => (
                <Activity key={i} {...activity}/>
            ))}
        </React.Fragment>
    )
};

export default Activities;
