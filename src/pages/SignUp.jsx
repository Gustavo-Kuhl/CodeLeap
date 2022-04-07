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
  align-items: center;
  background-color: #dddddd;

  @media (max-width: 1225px) {
    flex-direction: column;
  }
`;

const CompanyName = styled.div`
  background-color: #000;
  width: 50%;
  height: 100%;
  border-bottom-right-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 10vw;

  h1 {
    font-size: 3rem;
    color: #fff;
  }

  @media (max-width: 1225px) {
    width: 100%;
    margin: 0;
    height: 30%;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`

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
    navigate("/home");
  };

  const handleChange = ({ target }) => {
    setUsername(target.value.trim());

    if (target.value.trim() !== "") {
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
      <CompanyName>
        <h1>CodeLeap Network.</h1>
      </CompanyName>
      <Form type="sign">
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
