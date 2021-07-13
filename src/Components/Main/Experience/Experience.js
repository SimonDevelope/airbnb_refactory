import React from 'react';
import './Experience.css';

export const ExperienceList = ({ content }) => {
  return (
    <>
      <a href="/" className="expereince-contents-last-wrapper">
        <picture>
          <source srcSet={content.source}></source>
          <img
            src={content.src}
            alt={content.src}
            className="experience-total-common-attr"
          ></img>
        </picture>
        <div className="experience-contents-title-outter-wrapper">
          <span className="experience-common-attr-A">{content.title}</span>
          <span className="experience-common-attr-B">{content.sub}</span>
        </div>
      </a>
    </>
  );
};

function Experience() {
  const contents = [
    {
      id: 1,
      title: '추천 컬렉션: 여행 본능을 깨우는 체험',
      sub: '온라인 체험으로 집에서 랜선 여행을 즐기세요.',
      source:
        'https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720',
      src: 'https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720',
    },
    {
      id: 2,
      title: '온라인 체험',
      sub: '호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요.',
      source:
        'https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720',
      src: 'https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720',
    },
    {
      id: 3,
      title: '체험',
      sub: '어디에서든 세계 각지의 매력을 만나실 수 있습니다.',
      source:
        'https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720',
      src: 'https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720',
    },
  ];

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
        {contents.map((content) => (
          <ExperienceList content={content} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
