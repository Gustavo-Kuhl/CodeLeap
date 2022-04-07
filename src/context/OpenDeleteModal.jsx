import { createContext, useState } from "react";

export const DeleteModalContext = createContext();

export const DeleteModalProvider = ({ children }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <DeleteModalContext.Provider value={{ openDeleteModal, setOpenDeleteModal }}>
      {children}
    </DeleteModalContext.Provider>
  );
};
