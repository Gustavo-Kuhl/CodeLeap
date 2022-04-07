import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.2rem;
  border: 1px solid #ccc;
`;

export const Form = ({ children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {children}
    </FormContainer>
  );
};
