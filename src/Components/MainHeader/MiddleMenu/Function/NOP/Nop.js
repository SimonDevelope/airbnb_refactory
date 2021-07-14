import React, { useState } from 'react';
import './Nop.css';

function Add() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
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
              onClick={onDecrease}
            >
              ﹣
            </button>
            <div className="nop-number-area-attr">{number}</div>
            <button
              className="nop-plus-btn-attr"
              type="button"
              onClick={onIncrease}
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
              onClick={onDecrease}
            >
              ﹣
            </button>
            <div className="nop-number-area-attr">{number}</div>
            <button
              className="nop-plus-btn-attr"
              type="button"
              onClick={onIncrease}
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
              onClick={onDecrease}
            >
              ﹣
            </button>
            <div className="nop-number-area-attr">{number}</div>
            <button
              className="nop-plus-btn-attr"
              type="button"
              onClick={onIncrease}
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
