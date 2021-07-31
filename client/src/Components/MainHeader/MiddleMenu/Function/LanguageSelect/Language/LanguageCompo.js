import React from 'react';
import './LanguageCompo.css';
import { XIconLogo } from '../../../../MainheaderSvg/MainHeaderSvg';

function Language() {
  return (
    <div className="languagecompo-total-outter-wrapper">
      <div className="languagecompo-total-inner-wrapper">
        <button className="selectlang-close-icon-wrapper">
          <div className="selectlang-close-icon-inner-wrapper">
            <XIconLogo />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Language;
