import React from "react";
import { useFetchSinglePost } from "../hooks/postsHooks";
import { useParams } from "react-router-dom";
import PostItem from "./PostItem";

const SinglePost = () => {
  const { id } = useParams();
  const { data: post, error, isError, isLoading } = useFetchSinglePost(id);
  return (
    <div>
      {isLoading ? (
        <p>Loading..</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <PostItem post={post} showBody={true} />
      )}
    </div>
  );
};

export default SinglePost;
