import React from 'react';
import './Word.css';

function Word() {
  return (
    <div className="word-total-wrapper">
      <div className="word-total-inner-wrapper">
        <div className="background-outter-word-attr">
          <span className="backrground-inner-word-attr">
            어디든 상관없이 떠나고 싶을 때 에어비앤비가 도와드립니다!
          </span>
        </div>
        <div className="inner-btn-outter-wrapper">
          <button type="button" className="inner-btn-wrapper">
            유연한 검색
          </button>
        </div>
      </div>
    </div>
  );
}

export default Word;
