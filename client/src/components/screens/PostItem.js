import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post, showBody }) => {
  return (
    <article className="mb-6">
      <Link to={`/posts/${post._id}`}>
        <h1>{post.title}</h1>
      </Link>
      {showBody && <article>{post.body}</article>}
    </article>
  );
};

export default PostItem;
