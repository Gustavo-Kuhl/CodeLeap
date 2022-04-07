import { useContext } from "react";
import styled from "styled-components";

import deleteIcon from "../assets/delete.svg";
import editPen from "../assets/editPen.svg";

import { DeleteModalContext } from "../context/OpenDeleteModal";
import { PostIdContext } from "../context/PostID";
import { EditModalContext } from "../context/OpenEditModal";

import useLocalStorage from "../hooks/useLocalStorage";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #ffffff;
  border-radius: 0.2rem;
  border: 1px solid #ccc;
  margin: 3rem 0;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  background-color: #000;
  color: #fff;

  @media (max-width: 356px) {
    justify-content: center;
  }
`;

const PostContent = styled.div`
  padding: 2rem;
  text-align: left;

  .content {
    margin-top: 1rem;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;

  .profile-name {
    font-weight: bold;
    color: #777;
  }

  .passed-time {
    color: #777;
  }
`;

const Image = styled.img`
  padding: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
`;

export const Post = ({ id, title, content, username, datetime }) => {
  const { setOpenDeleteModal } = useContext(DeleteModalContext);
  const { setPostID } = useContext(PostIdContext);
  const { setOpenEditModal } = useContext(EditModalContext);
  const [localName] = useLocalStorage("username", "");

  const deletePost = () => {
    setOpenDeleteModal(true);
    setPostID(id);
  };

  const editPost = () => {
    setOpenEditModal(true);
    setPostID(id);
  };

  function formatDate(date) {
    const newDate = new Date(date);
    const formatedDate = newDate.toString().substring(3, 24);
    return formatedDate;
  }

  return (
    <Container id={id}>
      <PostHeader>
        <h2>{title}</h2>
        <div>
          {localName === username ? (
            <>
              <Image
                onClick={deletePost}
                src={deleteIcon}
                alt="Delete icon that opens a modal to delete this post."
              />
              <Image
                onClick={editPost}
                src={editPen}
                alt="Edit icon that opens a modal to edit this post."
              />
            </>
          ) : null}
        </div>
      </PostHeader>
      <PostContent>
        <Profile>
          <h4 className="profile-name">@{username}</h4>
          <span className="passed-time">{formatDate(datetime)}</span>
        </Profile>
        <p className="content">{content}</p>
      </PostContent>
    </Container>
  );
};
