import React, { useEffect, useState } from 'react';
import './Experience.css';
import Axios from 'axios';

function Experience() {
  const [experiData, setExperiData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/lookforexperi').then((response) => {
      setExperiData(response.data);
    });
  }, []);
  return (
    <div className="experience-total-wrapper">
      <div className="experience-title-total-wrapper">
        <span className="experience-word-total-attr">체험 둘러보기</span>
        <span className="experience-word-anoth-attr">
          현지 전문가와 함께하는 독특한 액티비티에 오프라인이나 온라인으로
          참여해 보세요.
        </span>
      </div>
      <div className="experience-contents-total-inner-wrapper">
        {experiData.map((experiDataList) => {
          return (
            <a
              href="/"
              className="expereince-contents-last-wrapper"
              key={experiDataList.id}
            >
              <picture>
                <source srcSet={experiDataList.source}></source>
                <img
                  src={experiDataList.source}
                  alt={experiDataList.source}
                  className="experience-total-common-attr"
                ></img>
              </picture>
              <div className="experience-contents-title-outter-wrapper">
                <span className="experience-common-attr-A">
                  {experiDataList.title}
                </span>
                <span className="experience-common-attr-B">
                  {experiDataList.sub}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
