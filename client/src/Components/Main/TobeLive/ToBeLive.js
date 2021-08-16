import React, { useEffect, useState } from 'react';
import './ToBeLive.css';
import Axios from 'axios';

function Live() {
  const [livedata, setLiveData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/tobelive').then((response) => {
      setLiveData(response.data);
    });
  }, []);

  return (
    <div className="live-total-wrapper">
      <div className="live-title-total-wrapper">
        <span className="live-content-word-attr">
          어디에서나, 여행은 살아보는 거야!
        </span>
      </div>
      <div className="live-contents-total-outter-wrapper">
        {livedata.map((LiveDataList) => {
          return (
            <a
              href="/"
              className="live-common-total-outter-attr"
              key={LiveDataList.id}
            >
              <div>
                <source srcSet={LiveDataList.source}></source>
                <img
                  src={LiveDataList.source}
                  alt={LiveDataList.source}
                  className="live-common-images-attr"
                ></img>
              </div>
              <div className="live-common-total-title-attr">
                <span className="live-common-total-contents-attr">
                  {LiveDataList.content}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Live;
