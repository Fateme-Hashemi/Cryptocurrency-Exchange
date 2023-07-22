import React from 'react';
import loaderimg from "../img/Loading_icon.gif";
const loader = () => {
    return (
        <div>
            <img src={loaderimg} />
            <h3>Loading ...</h3>
        </div>
    );
};

export default loader;
