import React, { useState, useMemo } from "react";
import { useFetchAllPosts } from "../hooks/postsHooks";
import Spinner from "../sharedUi/Spinner";
import Pagination from "./../Pagination";

let pageSize = 3;

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: posts, error, isLoading, isError } = useFetchAllPosts();

  const paginatedPosts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    if (posts) return posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, posts]);

  return (
    <>
      <div>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <p>{error.message}</p>
        ) : (
          paginatedPosts.map((post) => (
            <p className="m-6" key={post._id}>
              {post.title}
            </p>
          ))
        )}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalCount={posts ? posts.length : 0}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default Posts;
