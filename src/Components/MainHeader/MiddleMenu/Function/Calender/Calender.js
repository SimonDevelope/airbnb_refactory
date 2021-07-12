import React from 'react';
import './Calender.css';

function CalenderModal() {
  return (
    <div className="calender-modal-outter-wrapper">
      <div className="calender-modal-inner-wrapper">
        <div className="calender-switch-area-wrapper">
          <div className="calender-switch-inner-btn-area">
            <button className="calender-switch-btn-common-attr-A">
              <span>달력</span>
            </button>
            <button className="calender-switch-btn-common-attr-B">
              <span>유연한 일정</span>
            </button>
          </div>
        </div>
        <div className="calender-contents-area-partition">
          <div className="calender-two-way-area"></div>
        </div>
      </div>
    </div>
  );
}

export default CalenderModal;
