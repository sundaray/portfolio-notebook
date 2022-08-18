import React, { useState, useMemo } from "react";
import { useFetchAllPosts } from "../hooks/postsHooks";
import Searchbox from "../sharedUi/Searchbox";
import Spinner from "../sharedUi/Spinner";
import Pagination from "../Pagination";
import PostList from "./PostList";

let pageSize = 2;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: posts, error, isLoading, isError } = useFetchAllPosts();

  const paginatedPosts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    if (posts) return posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, posts]);

  const searchResult = () => {
    let filteredPosts;
    if (searchQuery) {
      filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredPosts;
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Searchbox
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
      />
      <div>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <p>{error.message}</p>
        ) : (
          <PostList
            posts={paginatedPosts}
            searchResult={searchResult()}
            searchQuery={searchQuery}
          />
        )}
      </div>
      <div>
        {!searchQuery && (
          <Pagination
            currentPage={currentPage}
            totalCount={posts ? posts.length : 0}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </>
  );
};

export default Home;
