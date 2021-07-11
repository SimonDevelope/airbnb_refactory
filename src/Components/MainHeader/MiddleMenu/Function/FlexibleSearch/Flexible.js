import React from 'react';
import './Flexible.css';
function Box() {
  return (
    <div className="flexible-search-outter-wrapper">
      <div className="flexible-search-inner-wrapper">
        <div className="flexible-search-title-wrapper">
          <span className="flexible-search-title">
            언제 어디로든 떠나는 여행
          </span>
        </div>
        <div className="flexible-btn-wrapper">
          <button className="flexible-btn-attr">
            <span className="flexible-btn-inner-word-attr">유연한 검색</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
