import React, { useEffect, useState } from 'react';
import './CloseTrip.css';
import Axios from 'axios';

function Close() {
  const [closeContents, setCloseContents] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/').then((response) => {
      setCloseContents(response.data);
    });
  }, []);

  return (
    <div className="close-area-total-wrapper">
      <div className="close-title-total-wrapper">
        <span className="close-title-word-attr">가까운 여행지 둘러보기</span>
      </div>
      <div className="close-inner-contents-outter-wrapper">
        {closeContents.map((CloseData) => {
          return (
            <div className="image-N-word-total-attr" key={CloseData.id}>
              <a href="/" className="close-address-common-wrapper">
                <div className="close-image-Common-attr">
                  <picture>
                    <source srcSet={CloseData.source}></source>
                    <img
                      src="content.imgsrc"
                      alt="content.imgsrc"
                      className="close-common-image-attr"
                    ></img>
                  </picture>
                </div>
                <div className="close-explain-common-outter-wrapper">
                  <div className="close-explain-common-area-wrapper">
                    <span className="location-word-total-attr">
                      {CloseData.title}
                    </span>
                    <span className="location-word-content-attr">
                      {CloseData.content}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Close;
