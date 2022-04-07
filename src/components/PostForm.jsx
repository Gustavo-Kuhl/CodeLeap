import { useState, useEffect } from "react";
import styled from "styled-components";

import { Form } from "./Form";
import { Input } from "./Input";
import { Button, ButtonBox } from "./Button";

import useLocalStorage from "../hooks/useLocalStorage";

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 1rem;

  .title {
    font-weight: bold;
    font-size: 1.375rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 0.3rem;
  outline: unset;
  width: 100%;
  height: 150px;
  border: 1px solid #777;
  resize: none;
`;

export const PostForm = ({ textH3, setCreatedPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [emptyFields, setEmptyFields] = useState(true);
  const [username] = useLocalStorage("username");

  const saveTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const saveContentChange = ({ target }) => {
    setContent(target.value);
  };

  const verifyEmptyFields = () => {
    if (title.trim() && content.trim()) {
      setEmptyFields(false);
    } else {
      setEmptyFields(true);
    }
  };

  const handleClick = () => {
    const data = {
      username,
      title,
      content,
    };

    fetch("http://localhost:5000/createPost", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => setCreatedPost(true))
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    const data = {
      username, title, content,
    }

    fetch("https://dev.codeleap.co.uk/careers/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(() => setCreatedPost(true))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    verifyEmptyFields();
  }, [title, content]);

  return (
    <Form>
      <InputBox>
        <h3 className="title">{textH3}</h3>
        <label htmlFor="title-input">Title</label>
        <Input
          autoComplete="off"
          onChange={saveTitleChange}
          id="title-input"
          placeholder="Hello World"
        />
        <label htmlFor="post-area">Content</label>
        <TextArea
          onChange={saveContentChange}
          id="post-area"
          placeholder="Content here"
        ></TextArea>
        <ButtonBox>
          <Button text="CREATE" onClick={handleSubmit} emptyField={emptyFields} />
        </ButtonBox>
      </InputBox>
    </Form>
  );
};
