import React from "react";
import { Link } from "react-router-dom";
import { useFetchAllPosts } from "../hooks/postsHooks";
import Spinner from "../sharedUi/Spinner";
import { PencilAltIcon } from "@heroicons/react/outline";

const Admin = () => {
  const { data: posts, error, isLoading, isError } = useFetchAllPosts();

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <Link to={`/posts/${post._id}`}>
              <h2>{post.title}</h2>
            </Link>
            <Link to={`/postedit/${post._id}`}>
              <PencilAltIcon className="w-5 h-5" />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
