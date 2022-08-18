import React from "react";
import PostItem from "./PostItem";

const Postlist = ({ posts, searchResult, searchQuery }) => {
  return (
    <div className="w-11/12 sm:9/12 md:w-3/5 lg:w-1/2 m-auto">
      {!searchQuery
        ? posts.map((post) => <PostItem post={post} showBody={false} />)
        : searchResult.map((post) => <PostItem post={post} showBody={false} />)}
    </div>
  );
};

export default Postlist;
