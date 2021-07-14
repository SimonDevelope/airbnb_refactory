import React from 'react';
import './LanguageSelect.css';
import { XIconLogo } from '../../../MainheaderSvg/MainHeaderSvg';
import { LanguageAndCountry, contents } from './LanguageArray';
function SelectLang() {
  return (
    <div className="selectlang-total-outter-wrapper">
      <div className="selectlang-total-inner-wrapper">
        <button className="selectlang-close-icon-wrapper">
          <div className="selectlang-close-icon-inner-wrapper">
            <XIconLogo />
          </div>
        </button>
        <div className="selectlang-currency-language-btn-wrapper">
          <button className="selectlang-language-location-btn-attr">
            <span>언어와 지역</span>
          </button>
          <button className="selectlang-currency-btn-attr">
            <span>통화</span>
          </button>
        </div>
        <div className="recomendation-language-location-outter-wrapper">
          <div className="recomendation-language-location-title-wrapper">
            <span>추천 언어 및 지역</span>
          </div>
          <div className="recomendation-language-location-btn-outter-wrapper">
            <button className="recomend-united-state-btn-outter-wrapper">
              <span className="recomend-common-btn-contents-attr">English</span>
              <span className="recomend-common-btn-contents-attr-explain">
                United States
              </span>
            </button>
            <button className="recomend-united-kingdom-btn-outter-wrapper">
              <span className="recomend-common-btn-contents-attr">English</span>
              <span className="recomend-common-btn-contents-attr-explain">
                United Kingdom
              </span>
            </button>
          </div>
        </div>
        <div className="have-to-choose-language-location-total-warpper">
          <div className="have-to-choose-language-location-inner-wrapper">
            <div className="have-to-choose-language-title-total-wrapper">
              <span>언어와 지역을 선택하세요</span>
            </div>
            <div className="have-to-choose-language-location-grid-sector">
              {contents.map((content) => (
                <LanguageAndCountry content={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectLang;
