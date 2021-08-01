import React, { useEffect, useRef, useState } from 'react';
import './MiddleMenu.css';
import { Lodge, Experience } from './SearchBar/SearchBar';

function MiddleMenu() {
  const [turnOnMenu, setTurnOnMenu] = useState(false);
  const SwitchSearchBar = () => {
    setTurnOnMenu((turnOnMenu) => !turnOnMenu);
  };
  const liveSector = useRef();
  const experienceSector = useRef();
  useEffect(() => {
    if (turnOnMenu === false) {
      liveSector.current.disabled = true;
    } else if (turnOnMenu === true) {
      experienceSector.current.disabled = true;
    }
    return () => {
      liveSector.current.disabled = false;
      experienceSector.current.disabled = false;
    };
  });

  return (
    <div className="middle-menu-outter-wrapper">
      <div className="middle-inner-contents-wrapper">
        <div className="form-outter-wrapper">
          <div className="form-inner-wrapper">
            <form className="middle-inner-area-attr">
              <fieldset className="middle-inner-contents-area">
                <div className="middle-menu-list">
                  <label>
                    <input
                      className="menu-btn-atr"
                      type="radio"
                      onClick={SwitchSearchBar}
                      ref={liveSector}
                    ></input>
                    <span className="name-wrapper">숙소</span>
                  </label>
                  <label>
                    <input
                      className="menu-btn-atr"
                      type="radio"
                      onClick={SwitchSearchBar}
                      ref={experienceSector}
                    ></input>
                    <span className="name-wrapper">체험</span>
                  </label>
                  <label>
                    <input className="menu-btn-atr" type="radio"></input>
                    <span className="name-wrapper">온라인 체험</span>
                  </label>
                </div>
              </fieldset>
              <div>{turnOnMenu ? <Experience /> : <Lodge />}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleMenu;
