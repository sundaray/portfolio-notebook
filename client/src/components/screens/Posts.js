import React from "react";
import { useFetchAllPosts } from "../hooks/postsHooks";

const Posts = () => {
  const { data: posts, error, isLoading, isError } = useFetchAllPosts();
  return (
    <div>
      {isLoading ? (
        <p>Fetching...</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        posts.map((post) => <p>{post.title}</p>)
      )}
    </div>
  );
};

export default Posts;
