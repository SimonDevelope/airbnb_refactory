// import React from 'react';
// import './ToBeLive.css';
// import Axios from 'axios';
// export const LiveContents = ({ content }) => {
//   return (
//     <a href="/" className="live-common-total-outter-attr">
//       <div>
//         <source srcSet={content.source}></source>
//         <img
//           src={content.src}
//           alt={content.src}
//           className="live-common-images-attr"
//         ></img>
//       </div>
//       <div className="live-common-total-title-attr">
//         <span className="live-common-total-contents-attr">{content.title}</span>
//       </div>
//     </a>
//   );
// };

// function Live() {
//   Axios.get('http://localhost:4000/api').then((result) => {
//     console.log(result);
//   });
//   const contents = [
//     {
//       id: 1,
//       source:
//         'https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320',
//       src: 'https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720',
//       title: '자연생활을 만끽할 수 있는 숙소',
//     },
//     {
//       id: 2,
//       source:
//         'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320',
//       src: 'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720',
//       title: '독특한 공간',
//     },
//     {
//       id: 3,
//       source:
//         'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320',
//       src: 'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720',
//       title: '집 전체',
//     },
//     {
//       id: 4,
//       source:
//         'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320',
//       src: 'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720',
//       title: '반려동물 동반 가능',
//     },
//   ];

//   return (
//     <div className="live-total-wrapper">
//       <div className="live-title-total-wrapper">
//         <span className="live-content-word-attr">
//           어디에서나, 여행은 살아보는 거야!
//         </span>
//       </div>
//       <div className="live-contents-total-outter-wrapper">
//         {contents.map((content) => (
//           <LiveContents content={content} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Live;

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
            <a href="/" className="live-common-total-outter-attr">
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
