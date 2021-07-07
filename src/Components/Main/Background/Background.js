import React from 'react';
import './Background.css';

function Background () {
    return (
        <>
            <div className='Background-total-area-attr'>
                <picture>
                    <source
                    srcSet='https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=960'
                    ></source>
                    <img
                    className='Background-image-attr'
                    src='https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=960'
                    alt='https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=960'
                    ></img>
                </picture>
            </div>
        </>
    );
}

export default Background;