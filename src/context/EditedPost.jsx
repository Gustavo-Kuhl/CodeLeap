import { createContext, useState } from "react";

export const EditedPostContext = createContext();

export const EditedPostProvider = ({ children }) => {
  const [editedPost, setEditedPost] = useState(false);

  return (
    <EditedPostContext.Provider value={{ editedPost, setEditedPost }}>
      {children}
    </EditedPostContext.Provider>
  );
};
