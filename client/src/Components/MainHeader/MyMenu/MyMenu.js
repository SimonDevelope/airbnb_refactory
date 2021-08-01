import React, { useRef, useState, useEffect } from 'react';
import './MyMenu.css';
import SettingModal from '../MyMenu/MyMenuFunction/Setting';
import {
  WordIconLogo,
  HambergetIconLogo,
  PeopleIconLogo,
} from '../MainheaderSvg/MainHeaderSvg';
import { useModalContext } from '../../../store/modalContext';

function RightMenu() {
  const rangeOfMyMenuFuncSelect = useRef();
  const { setShowModal } = useModalContext();

  const toggleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const [menu, setMenu] = useState(false);
  const OpenMenu = () => {
    setMenu((menu) => !menu);
  };
  const CloseMenu = (e) => {
    if (
      rangeOfMyMenuFuncSelect.current &&
      !rangeOfMyMenuFuncSelect.current.contains(e.target)
    ) {
      setMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', CloseMenu);
    return () => {
      document.removeEventListener('mousedown', CloseMenu);
    };
  }, []);
  return (
    <>
      <div className="right-menu-total-wrapper">
        <div className="mymenu-icons-wrapper">
          <div className="left-container-wrapper">
            <div className="to-be-host-address-outter-wrapper">
              <a href="/" className="to-be-host-address-wrapper">
                <span className="to-be-host-word-attr">호스트 되기</span>
              </a>
            </div>
            <div className="world-icon-total-wrapper">
              <button
                type="button"
                className="world-icon-inner-wrapper"
                onClick={toggleShowModal}
              >
                <WordIconLogo />
              </button>
            </div>
          </div>
          <div className="icon-container-wrapper">
            <button
              type="button"
              className="icon-container-btn-attr"
              onClick={OpenMenu}
            >
              <div className="hamberger-icon-wrapper">
                <HambergetIconLogo />
              </div>
              <div className="people-icon-wrapper">
                <PeopleIconLogo />
              </div>
            </button>
          </div>
        </div>
        <div ref={rangeOfMyMenuFuncSelect}>{menu && <SettingModal />}</div>
      </div>
    </>
  );
}

export default RightMenu;
