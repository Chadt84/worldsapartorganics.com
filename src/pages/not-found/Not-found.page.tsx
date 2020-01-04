import React from 'react';
import {Helmet} from "react-helmet";

const NotFound: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Worlds Apart - Not found</title>
            </Helmet>
            Page not found.
        </div>
    )
};

export default NotFound;
