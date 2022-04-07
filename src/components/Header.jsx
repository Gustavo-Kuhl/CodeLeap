import styled from "styled-components"
import useLocalStorage from "../hooks/useLocalStorage"

const Container = styled.header`
  width: 100%;
  background-color: #000;
  padding: 2rem 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
      <span>Logged as @{username}</span>
    </Container>
  )
}