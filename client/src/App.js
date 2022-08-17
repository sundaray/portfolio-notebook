import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/screens/Posts";
import PostCreate from "./components/screens/PostCreate";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts/create" element={<PostCreate />} />
    </Routes>
  );
};

export default App;
