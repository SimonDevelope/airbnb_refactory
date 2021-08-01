import React from 'react';
import './Setting.css';
import { useLoginShow } from '../../../../store/modalContext';

function SettingModal() {
  const { setShowLoginView } = useLoginShow();
  const toggleShowLoginModal = () => {
    setShowLoginView((prevshowLoginView) => !prevshowLoginView);
  };
  return (
    <div className="setting-total-outter-area">
      <div className="setting-total-inner-area">
        <div className="setting-sign-up-wrapper">
          <button
            className="setting-sign-up-btn-attr"
            onClick={toggleShowLoginModal}
          >
            회원 가입
          </button>
        </div>
        <div className="setting-sign-in-wrapper">
          <button
            className="setting-sign-in-btn-attr"
            onClick={toggleShowLoginModal}
          >
            로그인
          </button>
        </div>
        <div className="setting-partition-attr"></div>
        <div className="setting-toBeHost-wrapper">
          <button className="setting-toBeHost-btn-attr">
            숙소 호스트 되기
          </button>
        </div>
        <div className="setting-experienceHosting-wrapper">
          <button className="setting-experienceHosting-btn-attr">
            체험 호스팅하기
          </button>
        </div>
        <div className="setting-advise-wrapper">
          <button className="setting-advise-btn-attr">도움말</button>
        </div>
      </div>
    </div>
  );
}

export default SettingModal;
