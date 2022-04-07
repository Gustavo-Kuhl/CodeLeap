import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Loading } from "../components/Loading";
import { Header } from "../components/Header";
import { PostForm } from "../components/PostForm";
import { Post } from "../components/Post";
import { DeleteModal } from "../components/DeleteModal";
import { EditModal } from "../components/EditModal";

import { DeleteModalContext } from "../context/OpenDeleteModal";
import { EditModalContext } from "../context/OpenEditModal";
import { DeletedPostContext } from "../context/DeletedPost";
import { EditedPostContext } from "../context/EditedPost";

import useLocalStorage from "../hooks/useLocalStorage";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Feed = styled.section`
  margin: 3rem 0;
  padding: 0 10vw;
  width: 100%;
`;

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [createdPost, setCreatedPost] = useState(false);
  const [load, setLoad] = useState(true);

  const { openDeleteModal } = useContext(DeleteModalContext);
  const { openEditModal } = useContext(EditModalContext);
  const { deletedPost, setDeletedPost } = useContext(DeletedPostContext);
  const { editedPost, setEditedPost } = useContext(EditedPostContext);
  const [username] = useLocalStorage("username", "");

  const navigate = useNavigate();

  useEffect(() => {
    username === "" || username === undefined ? navigate("/") : null;
  }, []);

  const fetchPosts = async () => {
    const data = await fetch("https://dev.codeleap.co.uk/careers/").then(
      (res) => res.json()
    );
    setDeletedPost(false);
    setCreatedPost(false);
    setEditedPost(false);
    setLoad(false);
    setPosts(data.results);
  };

  useEffect(() => {
    fetchPosts();
  }, [createdPost, deletedPost, editedPost]);

  return (
    <>
      <Header />
      {openDeleteModal ? <DeleteModal /> : null}
      {openEditModal ? <EditModal /> : null}
      <Container>
        <Feed>
          <PostForm
            setCreatedPost={setCreatedPost}
            textH3={"What's on your mind?"}
          />
          {load ? (
            <Loading />
          ) : (
            <ul>
              {posts.map((post) => {
                return (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    username={post.username}
                    content={post.content}
                    datetime={post.created_datetime}
                  />
                );
              })}
            </ul>
          )}
        </Feed>
      </Container>
    </>
  );
};
