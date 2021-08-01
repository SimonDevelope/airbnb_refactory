import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ModalContextProvider, LoginModalProvider } from './store/modalContext';

ReactDOM.render(
  <LoginModalProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </LoginModalProvider>,
  document.getElementById('root')
);
