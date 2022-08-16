import React from "react";
import { useFetchAllPosts } from "../hooks/postsHooks";
import Spinner from "../sharedUi/Spinner";

const Posts = () => {
  const { data: posts, error, isLoading, isError } = useFetchAllPosts();
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        posts.map((post) => <p>{post.title}</p>)
      )}
    </div>
  );
};

export default Posts;
