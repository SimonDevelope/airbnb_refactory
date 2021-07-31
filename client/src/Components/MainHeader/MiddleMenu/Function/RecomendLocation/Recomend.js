import React from 'react';
import './Recomend.css';

function Recomend() {
  return (
    <div className="recomend-outter-area-wrapper">
      <button className="recomend-inner-area-wrapper">
        <div className="recomend-location-img-wrapper">
          <img
            src="https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq"
            className="recomend-location-img-attr"
          ></img>
        </div>
        <div className="recomend-location-title-wrapper">
          <span>근처 추천 장소</span>
        </div>
      </button>
    </div>
  );
}

export default Recomend;
