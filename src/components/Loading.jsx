import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  border-radius: 50%;
  border: 5px solid #000;
  border-top: 5px solid transparent;
  width: 50px;
  height: 50px;
  animation: rotate 0.8s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Loading = () => {
  return <Container><Box /></Container>;
};
