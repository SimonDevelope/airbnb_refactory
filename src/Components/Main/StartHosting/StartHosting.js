import React from 'react';
import './StartHosting.css';

function Hosting () {
    return(
        <div className='Hosting-total-warpper'>
            <a 
            href='/'
            className='Hosting-total-inner-wrapper'
            >
                <picture>
                    <source
                    srcSet='https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440'
                    ></source>
                    <img
                    className='Hosting-image-attr'
                    alt='https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_q=medq&im_w=720'
                    src='https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_q=medq&im_w=720'
                    ></img>
                </picture>
                <div className='Hosting-word-total-wrapper'>
                    <span className='Hosting-word-attr-A'>호스팅 시작하기</span>
                    <span className='Hosting-word-attr-B'>숙소를 공유하여 부수입을 올리고 새로운 가능성을<br /> 만나세요.</span>
                    <div className='Hosting-word-attr-C'>
                        <span className='Hosting-word-attr-D'>자세히 알아보기</span>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Hosting;