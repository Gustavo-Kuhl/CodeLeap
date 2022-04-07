import styled from "styled-components"
import useLocalStorage from "../hooks/useLocalStorage"

const Container = styled.header`
  width: 100%;
  background-color: #000;
  padding: 2rem 15vw 20vh;
  border-bottom-left-radius: 30px;
  position: absolute;
  z-index: -1;
  border-bottom-right-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    padding: 2rem 10vw 20vh;
  }

  h1 {
    font-weight: bold;
    font-size: 1.375rem;
    color: #fff;
  }

  span {
    color: #fff;
  }
`
 
export const Header = () => {

  const [username] = useLocalStorage("username")

  return (
    <Container>
      <h1>
        CodeLeap Network
      </h1>
      <span>@{username}</span>
    </Container>
  )
}