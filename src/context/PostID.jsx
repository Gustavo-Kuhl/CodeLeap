import { createContext, useState } from "react";

export const PostIdContext = createContext();

export const PostIdProvider = ({children}) => {
  const [postID, setPostID] = useState();

  return (
    <PostIdContext.Provider value={{ postID, setPostID }}>
      {children}
    </PostIdContext.Provider>
  );
}