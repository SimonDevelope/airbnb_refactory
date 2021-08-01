import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './Components/MainHeader/MainHeader';
import Main from './Components/Main/Main';
import Footter from './Components/Footter/Footter';
import SelectLang from './Components/MainHeader/MiddleMenu/Function/LanguageSelect/LanguageSlect';
import Login from './Components/MainHeader/MiddleMenu/Function/LoginModal/LoginModal';
import { useModalContext } from './store/modalContext';
import { useLoginShow } from './store/modalContext';

function App() {
  const rangeOfLangFuncSelect = useRef();
  const rangeOfLoginFuncSelect = useRef();
  const { showModal, setShowModal } = useModalContext();
  const { showLoginView, setShowLoginView } = useLoginShow();

  const CloseLangModal = (e) => {
    if (
      rangeOfLangFuncSelect.current &&
      !rangeOfLangFuncSelect.current.contains(e.target)
    ) {
      setShowModal(false);
    }
  };

  const CloseLoginModal = (e) => {
    if (
      rangeOfLoginFuncSelect.current &&
      !rangeOfLoginFuncSelect.current.contains(e.target)
    ) {
      setShowLoginView(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', CloseLangModal);
    document.addEventListener('mousedown', CloseLoginModal);
    if (showModal === true || showLoginView === true) {
      document.body.style.cssText = `
    overflow-y: hidden;
    `;
    }
    return () => {
      document.removeEventListener('mousedown', CloseLangModal);
      document.removeEventListener('mousedown', CloseLoginModal);
      document.body.style.cssText = `
      overflow-y: scroll;
      `;
    };
  });
  return (
    <div className="Total-view-attr">
      {showModal ? (
        <SelectLang rangeOfLangFuncSelect={rangeOfLangFuncSelect} />
      ) : (
        ''
      )}
      {showLoginView ? (
        <Login rangeOfLoginFuncSelect={rangeOfLoginFuncSelect} />
      ) : (
        ''
      )}
      <Header setShowModal={setShowModal} setShowLoginView={setShowLoginView} />
      <Main />
      <Footter />
    </div>
  );
}
export default App;
