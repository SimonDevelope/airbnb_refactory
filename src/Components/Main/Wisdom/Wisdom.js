import React from 'react';
import './Wisdom.css';

function Wisdom() {
  return (
    <div className="Wisdom-total-wrapper">
      <div className="Wisdom-title-total-wrapper">
        <a href="/" className="Wisdom-image-outter-wrapper">
          <picture>
            <source srcSet="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"></source>
            <img
              src="https://a0.muscache.com/im/pictures/f0343d6a-328c-4213-90a2-13ba3572a01f.jpg?im_q=medq&im_w=720"
              alt="https://a0.muscache.com/im/pictures/f0343d6a-328c-4213-90a2-13ba3572a01f.jpg?im_q=medq&im_w=720"
              className="Wisdom-image-attr"
            ></img>
          </picture>
          <div className="Wisdom-word-total-attr">
            <span className="Wisdom-word-attr-A">슬기로운 자연생활</span>
            <span className="Wisdom-word-attr-B">
              에어비앤비가 엄선한 위시리스트
            </span>
            <div className="Wisdom-word-attr-C">
              <span className="Wisdom-word-attr-D">여행 아이디어 얻기</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Wisdom;
