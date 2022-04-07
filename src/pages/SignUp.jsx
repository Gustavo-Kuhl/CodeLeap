import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Form } from "../components/Form";
import { Button, ButtonBox } from "../components/Button";
import { Input } from "../components/Input";

import useLocalStorage from "../hooks/useLocalStorage";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
`;

const InputBox = styled.div`
  width: 500px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .title {
    font-weight: bold;
    font-size: 1.375rem;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const SignUp = () => {
  const [username, setUsername] = useLocalStorage("username", "");
  const [emptyField, setEmptyField] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setUsername(username);
    navigate("/home");
  };

  const handleChange = ({ target }) => {
    setUsername(target.value);

    if (target.value !== "") {
      setEmptyField(false);
    } else {
      setEmptyField(true);
    }
  };

  useEffect(() => {
    if (username !== "") {
      navigate("/home");
    }
  }, []);

  return (
    <Container>
      <Form>
        <InputBox>
          <h2 className="title">Welcome {username} to CodeLeap network!</h2>
          <label htmlFor="input-name">Please enter your username</label>
          <Input
            id="input-name"
            type=""
            autoComplete="off"
            placeholder="John doe"
            onChange={handleChange}
          />
        </InputBox>
        <ButtonBox>
          <Button emptyField={emptyField} onClick={handleClick} text="ENTER" />
        </ButtonBox>
      </Form>
    </Container>
  );
};
