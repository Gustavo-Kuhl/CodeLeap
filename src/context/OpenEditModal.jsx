import { createContext, useState } from "react";

export const EditModalContext = createContext();

export const EditModalProvider = ({ children }) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <EditModalContext.Provider value={{ openEditModal, setOpenEditModal }}>
      {children}
    </EditModalContext.Provider>
  );
};
