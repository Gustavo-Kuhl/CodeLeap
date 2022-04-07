import { useContext } from "react";
import styled from "styled-components";

import { DeletedPostContext } from "../context/DeletedPost";
import { DeleteModalContext } from "../context/OpenDeleteModal";
import { PostIdContext } from "../context/PostID";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  padding: 1rem;
  width: 650px;
  height: 180px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 1rem;
  border-radius: 1rem;

  animation: animate .5s;

  @keyframes animate {
    0%{transform: translateY(-100%)}
    50%{transform: translateY(30%)}
    100%{transform: translateY(0)}
  }

  h2 {
    font-weight: normal;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.4rem 2rem;
  border: 1px solid #000;
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
  margin: 0rem 1rem;
  transition: 0.3s;
  border-radius: 0.3rem;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const DeleteModal = () => {
  const { setOpenDeleteModal } = useContext(DeleteModalContext);
  const { postID } = useContext(PostIdContext);
  const { setDeletedPost } = useContext(DeletedPostContext);

  function handleCancelButton() {
    setOpenDeleteModal(false);
  }

  function handleOKButton() {
    setOpenDeleteModal(false);

    fetch(`http://localhost:5000/deletePost/${postID}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setOpenDeleteModal(false);
        setDeletedPost(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <ModalBox>
        <h2>Are you sure you want to delete this item?</h2>
        <Buttons>
          <Button onClick={handleCancelButton}>Cancel</Button>
          <Button onClick={handleOKButton}>OK</Button>
        </Buttons>
      </ModalBox>
    </Container>
  );
};
