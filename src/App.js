import React, { useState } from 'react';
import './App.css';
import Header from './Components/MainHeader/MainHeader';
import Main from './Components/Main/Main';
import Footter from './Components/Footter/Footter';
import SelectLang from './Components/MainHeader/MiddleMenu/Function/LanguageSelect/LanguageSlect';

function App() {
  const [showSelectLang, setShowSelectLang] = useState(false);
  const ShowSelelectLangToggle = () => {
    setShowSelectLang((showSelectLang) => !showSelectLang);
  };

  return (
    <div className="Total-view-attr">
      {showSelectLang ? <SelectLang /> : null}
      <Header />
      <Main />
      <Footter />
    </div>
  );
}
export default App;
