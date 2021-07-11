import React, { useState } from 'react';
import './MiddleMenu.css';
import { Lodge, Experience } from './SearchBar/SearchBar';

function MiddleMenu() {
  const [state, setState] = useState(() => {
    return <Lodge />;
  });

  const LodgeView = () => {
    setState(() => {
      return <Lodge />;
    });
  };

  // 체험버튼 클릭 시
  const ExperienceView = () => {
    setState(() => {
      return <Experience />;
    });
  };
  return (
    <div className="Middle-menu-outter-wrapper">
      <div className="Middle-inner-contents-wrapper">
        <div className="Form-outter-wrapper">
          <div className="Form-inner-wrapper">
            <form className="Middle-inner-area-attr">
              <fieldset className="Middle-inner-contents-area">
                <div className="Middle-menu-list">
                  <label>
                    <input
                      className="Menu-btn-atr"
                      type="radio"
                      onClick={LodgeView}
                    ></input>
                    <span className="Name-wrapper">숙소</span>
                  </label>
                  <label>
                    <input
                      className="Menu-btn-atr"
                      type="radio"
                      onClick={ExperienceView}
                    ></input>
                    <span className="Name-wrapper">체험</span>
                  </label>
                  <label>
                    <input className="Menu-btn-atr" type="radio"></input>
                    <span className="Name-wrapper">온라인 체험</span>
                  </label>
                </div>
              </fieldset>
              <div>{state}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleMenu;
