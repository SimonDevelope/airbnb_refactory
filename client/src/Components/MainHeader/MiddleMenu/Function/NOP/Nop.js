import React, { useState } from 'react';
import './Nop.css';

function Add() {
  const [adultNumber, setAdultNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);
  const [infantNumber, setInfantNumber] = useState(0);
  const onAdultNum = () => {
    setAdultNumber(adultNumber + 1);
  };
  const downAdultNum = () => {
    setAdultNumber(adultNumber - 1);
    if (adultNumber < 1) {
      return setAdultNumber(0);
    }
  };
  const onchildNum = () => {
    setChildNumber(childNumber + 1);
  };
  const downChildNum = () => {
    setChildNumber(childNumber - 1);
    if (childNumber < 1) {
      return setChildNumber(0);
    }
  };
  const onInfantNum = () => {
    setInfantNumber(infantNumber + 1);
  };
  const downInfantNum = () => {
    setInfantNumber(infantNumber - 1);
    if (infantNumber < 1) {
      setInfantNumber(0);
    }
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
