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
                    src='https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_q=highq&im_w=720'
                    alt='https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_q=highq&im_w=720'
                    ></img>
                </picture>
            </div>
        </>
    );
}

export default Background;