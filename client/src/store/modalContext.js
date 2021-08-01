import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext({
  showMoadl: false,
  setShowModal: () => {},
});

const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => useContext(ModalContext);

export { ModalContextProvider, useModalContext };

// login modal context api
const LoginModal = createContext({
  show: false,
  setShowLoginView: () => {},
});

const LoginModalProvider = ({ children }) => {
  const [showLoginView, setShowLoginView] = useState(false);

  return (
    <LoginModal.Provider value={{ showLoginView, setShowLoginView }}>
      {children}
    </LoginModal.Provider>
  );
};

const useLoginShow = () => useContext(LoginModal);

export { LoginModalProvider, useLoginShow };
