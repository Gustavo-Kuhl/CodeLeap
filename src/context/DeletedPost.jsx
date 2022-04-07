import { createContext, useState } from "react";

export const DeletedPostContext = createContext();

export const DeletedPostProvider = ({ children }) => {
  const [deletedPost, setDeletedPost] = useState(false);

  return (
    <DeletedPostContext.Provider value={{ deletedPost, setDeletedPost }}>
      {children}
    </DeletedPostContext.Provider>
  );
};
