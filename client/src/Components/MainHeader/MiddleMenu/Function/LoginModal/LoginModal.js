import React from 'react';
import './LoginModal.css';
import { XIconLogo } from '../../../MainheaderSvg/MainHeaderSvg';
import { useLoginShow } from '../../../../../store/modalContext';

function Loogin({ rangeOfLoginFuncSelect }) {
  const { setShowLoginView } = useLoginShow();
  const closeLoginToggle = () => {
    setShowLoginView((prevshowLoginView) => !prevshowLoginView);
  };

  return (
    <div className="login-outter-total-wrapper">
      <div className="login-inner-total-wrapper" ref={rangeOfLoginFuncSelect}>
        <div className="login-upper-side-wrapper">
          <button
            className="login-xicon-outter-wrapper"
            onClick={closeLoginToggle}
          >
            <div className="login-xicon-inner-wrapper">
              <XIconLogo />
            </div>
          </button>
          <div className="login-modal-title-total-wrapper">
            <span className="login-title-attr">로그인 또는 회원 가입</span>
          </div>
        </div>
        <div className="login-under-side-wrapper">
          <div className="login-under-title-total-wrapper">
            <span className="login-under-title-attr">
              에어비앤비에 오신 것을 환영합니다.
            </span>
          </div>
          <div className="login-phone-number-total-wrapper">
            <button className="login-choose-country-number">
              <span className="login-choose-country-number-inner-info">
                국가/지역
              </span>
            </button>
            <div className="login-phone-number-input-wrapper">
              <div className="login-phone-number-info-area">
                <span className="login-phone-number-input-info">전화번호</span>
              </div>
              <input
                type="search"
                className="login-phone-number-input-area"
              ></input>
            </div>
          </div>
          <div>
            <span className="login-privacy-policy-announcement">
              전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
              데이터 요금이 부과됩니다. <a href="/">개인정보 처리 방침</a>
            </span>
          </div>
          <div className="login-after-check-continue-wrapper">
            <button className="login-after-check-continue">
              <span className="login-continue-word-attr">계속</span>
            </button>
          </div>
          <div className="login-partintion-with-sns">
            <div className="login-partition-attr"></div>
            <span className="login-partition-word-attr">또는</span>
            <div className="login-partition-attr"></div>
          </div>
          <div className="login-with-sns-btn-wrapper">
            <div className="login-with-sns-area-common-attr">
              <button className="login-with-sns-btn-common-attr">
                <span className="login-with-sns-btn-inner-word-attr">
                  페이스북으로 로그인하기
                </span>
              </button>
            </div>
            <div className="login-with-sns-area-common-attr">
              <button className="login-with-sns-btn-common-attr">
                <span className="login-with-sns-btn-inner-word-attr">
                  구글로 로그인하기
                </span>
              </button>
            </div>
            <div className="login-with-sns-area-common-attr">
              <button className="login-with-sns-btn-common-attr">
                <span className="login-with-sns-btn-inner-word-attr">
                  Apple 계정으로 계속하기
                </span>
              </button>
            </div>
            <div className="login-with-sns-area-common-attr">
              <button className="login-with-sns-btn-common-attr">
                <span className="login-with-sns-btn-inner-word-attr">
                  이메일로 로그인하기
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loogin;
