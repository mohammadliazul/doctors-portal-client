import React from 'react';
import notfound from '../../assets/images/404.jpg';

const NotFound = () => {
    return (
        <div style={{textAlign: 'center',}}>
            <img style={{height:'100vh'}} src={notfound} alt="404 page not found" />
        </div>
    );
};

export default NotFound;