import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DeletedPostProvider } from "./context/DeletedPost";
import { DeleteModalProvider } from "./context/OpenDeleteModal";
import { PostIdProvider } from "./context/PostID";
import { EditModalProvider } from "./context/OpenEditModal";
import { EditedPostProvider } from "./context/EditedPost";

ReactDOM.render(
  <React.StrictMode>
    <EditedPostProvider>
      <EditModalProvider>
        <PostIdProvider>
          <DeleteModalProvider>
            <DeletedPostProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </DeletedPostProvider>
          </DeleteModalProvider>
        </PostIdProvider>
      </EditModalProvider>
    </EditedPostProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
