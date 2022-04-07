import styled from "styled-components";

const Btn = styled.button`
  padding: 0.5rem 2rem;
  cursor: ${(props) => (props.emptyField ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.emptyField ? "#ddd" : "#000")};
  transition: 0.3s;
  color: ${(props) => (props.emptyField ? "#000" : "#fff")};
  font-weight: bold;
  border: unset;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = ({ text, emptyField, onClick }) => {
  return (
    <Btn
      onClick={onClick}
      emptyField={emptyField}
      disabled={emptyField ? true : false}
    >
      {text}
    </Btn>
  );
};
