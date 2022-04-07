import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  margin: ${(props) => (props.type === "sign" ? "3rem" : "3rem 0")};
  box-shadow: 0 0 5px #ccc;
`;

export const Form = ({ children, type }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer type={type} onSubmit={handleSubmit}>
      {children}
    </FormContainer>
  );
};
