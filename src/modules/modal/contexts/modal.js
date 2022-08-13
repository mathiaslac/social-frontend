import React, { createContext, useState } from "react";

const useContextValue = () => {
  const [modal, setModal] = useState(null);

  return [modal, setModal];
};

const initialState = [null, () => {}];

const ModalContext = createContext(initialState);

const ModalProvider = ({ children }) => {
  const value = useContextValue();

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export { ModalProvider };
export default ModalContext;
