// import React from 'react';
// import './CloseTrip.css';

// export const TripList = ({ content }) => {
//   return (
//     <div className="image-N-word-total-attr">
//       <a href="/" className="close-address-common-wrapper">
//         <div className="close-image-Common-attr">
//           <picture>
//             <source srcSet={content.source}></source>
//             <img
//               src="content.imgsrc"
//               alt="content.imgsrc"
//               className="close-common-image-attr"
//             ></img>
//           </picture>
//         </div>
//         <div className="close-explain-common-outter-wrapper">
//           <div className="close-explain-common-area-wrapper">
//             <span className="location-word-total-attr">{content.title}</span>
//             <span className="location-word-content-attr">
//               {content.content}
//             </span>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// };

// function Close() {
//   const Contents = [
//     {
//       id: 1,
//       title: '서울',
//       content: '차로 15분 거리',
//       source:
//         'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=240',
//       imgsrc:
//         'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
//     },
//     {
//       id: 2,
//       title: '부산',
//       content: '차로 5시간 거리',
//       source:
//         'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240',
//       imgsrc:
//         'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720',
//     },
//     {
//       id: 3,
//       title: '양양군',
//       content: '차로 2.5시간 거리',
//       source:
//         'https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240',
//       imgsrc:
//         'https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=720',
//     },
//     {
//       id: 4,
//       title: '속초시',
//       content: '차로 2.5시간 거리',
//       source:
//         'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240',
//       imgsrc:
//         'https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=720',
//     },
//     {
//       id: 5,
//       title: '제주도(Jeju)',
//       content: '차로 7.5시간 거리',
//       source:
//         'https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240',
//       imgsrc:
//         'https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=720',
//     },
//     {
//       id: 6,
//       title: '완주군',
//       content: '차로 3시간 거리',
//       source:
//         'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240',
//       imgsrc:
//         'https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=720',
//     },
//     {
//       id: 7,
//       title: '고성군',
//       content: '차로 3시간 거리',
//       source:
//         'https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240',
//       imgsrc:
//         'https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=720',
//     },
//     {
//       id: 8,
//       title: '전주시',
//       content: '차로 3시간 거리',
//       source:
//         'https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=240',
//       imgsrc:
//         'https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=720',
//     },
//   ];

//   return (
//     <div className="close-area-total-wrapper">
//       <div className="close-title-total-wrapper">
//         <span className="close-title-word-attr">가까운 여행지 둘러보기</span>
//       </div>
//       <div className="close-inner-contents-outter-wrapper">
//         {Contents.map((Content) => (
//           <TripList content={Content} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Close;

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
