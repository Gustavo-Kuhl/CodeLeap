import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { EditModalContext } from "../context/OpenEditModal";
import { PostIdContext } from "../context/PostID";
import { EditedPostContext } from "../context/EditedPost";

import useLocalStorage from "../hooks/useLocalStorage";

import { ButtonBox, Button } from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  width: 700px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  gap: 1rem;

  .input-box {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid #777;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  outline: unset;
  height: 100px;
  border: 1px solid #777;
  resize: none;
  border-radius: 0.3rem;
`;

const CancelButton = styled.button`
  padding: 0.5rem 2rem;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  transition: 0.3s;
  font-weight: bold;
  border: unset;
  margin-right: 1rem;
`;

export const EditModal = () => {
  const [emptyFields, setEmptyFields] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [username] = useLocalStorage("username");

  const { setEditedPost } = useContext(EditedPostContext);
  const { postID } = useContext(PostIdContext);
  const { setOpenEditModal } = useContext(EditModalContext);

  function saveTitleChange({ target }) {
    setTitle(target.value);
  }

  function saveContentChange({ target }) {
    setContent(target.value);
  }

  function verifyEmptyFields() {
    if (title.trim() && content.trim()) {
      setEmptyFields(false);
    } else {
      setEmptyFields(true);
    }
  }

  function closeModal() {
    setOpenEditModal(false);
  }

  function editPost() {
    fetch(`https://dev.codeleap.co.uk/careers/${postID}/`, {
      method: "PATCH",
      body: JSON.stringify({ username, title, content }),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        closeModal();
        setEditedPost(true);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    verifyEmptyFields();
  }, [title, content]);

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h2>Edit item</h2>
        <div className="input-box">
          <label htmlFor="">Title</label>
          <Input placeholder="Hello World" onChange={saveTitleChange} />
        </div>
        <div className="input-box">
          <label htmlFor="">Content</label>
          <TextArea
            onChange={saveContentChange}
            id="post-area"
            placeholder="Content here"
          />
        </div>
        <ButtonBox>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
          <Button text="SAVE" onClick={editPost} emptyField={emptyFields} />
        </ButtonBox>
      </Form>
    </Container>
  );
};
