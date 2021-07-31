import React from 'react';
import './Policy.css';

export const PolicyContent = ({ content }) => {
  return (
    <>
      <div className="policy-dot-attr">・</div>
      <a href="/" className="policy-address-common-attr">
        <span className="policy-address-word-attr">{content.title}</span>
      </a>
    </>
  );
};

function Policy() {
  const contents = [
    {
      id: 0,
      title: '개인정보 처리방침',
    },
    {
      id: 1,
      title: '이용약관',
    },
    {
      id: 2,
      title: '사이트맵',
    },
    {
      id: 3,
      title: '한국의 변경된 환불 정책',
    },
    {
      id: 4,
      title: '회사 세부정보',
    },
  ];
  return (
    <div className="policy-outter-wrapper">
      <div className="policy-inner-contents-wrapper">
        <div className="policy-left-container-wrapper">
          <div className="policy-cop-mark">© 2021 Airbnb,inc.</div>
          {contents.map((content) => (
            <PolicyContent content={content} />
          ))}
        </div>
        <div className="right-contain-wrapper">
          <button className="policy-button-common-attr">
            <span className="policy-button-inner-word-attr">한국어(KR)</span>
          </button>
          <button className="policy-button-common-attr">
            <span className="policy-button-inner-word-attr">KRW</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Policy;
