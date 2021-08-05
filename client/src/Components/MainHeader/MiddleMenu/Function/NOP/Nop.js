import React from 'react';
import './Nop.css';

function Add({
  adultNumber,
  childNumber,
  infantNumber,
  onAdultNum,
  downAdultNum,
  onchildNum,
  downChildNum,
  onInfantNum,
  downInfantNum,
}) {
  return (
    <div className="nop-modal-outter-wrapper">
      <div className="nop-modal-inner-wrapper">
        <div className="nop-modal-adult-area">
          <div>
            <div className="nop-specific-title-attr">
              <span>성인</span>
            </div>
            <div className="nop-specific-explaination">
              <span>만 13세 이상</span>
            </div>
          </div>
          <div className="nop-modal-cal-area">
            <button
              className="nop-minus-btn-attr"
              type="button"
              onClick={downAdultNum}
            >
              ﹣
            </button>
            <div className="nop-number-area-attr">{adultNumber}</div>
            <button
              className="nop-plus-btn-attr"
              type="button"
              onClick={onAdultNum}
            >
              ＋
            </button>
          </div>
        </div>
        <div className="nop-modal-age-partition"></div>
        <div className="nop-modal-adult-area">
          <div>
            <div className="nop-specific-title-attr">
              <span>어린이</span>
            </div>
            <div className="nop-specific-explaination">
              <span>만 2세 ~ 12세</span>
            </div>
          </div>
          <div className="nop-modal-cal-area">
            <button
              className="nop-minus-btn-attr"
              type="button"
              onClick={downChildNum}
            >
              ﹣
            </button>
            <div className="nop-number-area-attr">{childNumber}</div>
            <button
              className="nop-plus-btn-attr"
              type="button"
              onClick={onchildNum}
            >
              ＋
            </button>
          </div>
        </div>
        <div className="nop-modal-age-partition"></div>
        <div className="nop-modal-adult-area">
          <div>
            <div className="nop-specific-title-attr">
              <span>유아</span>
            </div>
            <div className="nop-specific-explaination">
              <span>만 2세 미만</span>
            </div>
          </div>
          <div className="nop-modal-cal-area">
            <button
              className="nop-minus-btn-attr"
              type="button"
              onClick={downInfantNum}
            >
              ﹣
            </button>
            <div className="nop-number-area-attr">{infantNumber}</div>
            <button
              className="nop-plus-btn-attr"
              type="button"
              onClick={onInfantNum}
            >
              ＋
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
