import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import PostCreate from "./components/screens/PostCreate";
import SinglePost from "./components/screens/SinglePost";
import Admin from "./components/screens/Admin";
import PostEdit from "./components/screens/PostEdit";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/posts/create" element={<PostCreate />} />
      <Route path="/posts/:id" element={<SinglePost />} />
      <Route path="/postedit/:id" element={<PostEdit />} />
    </Routes>
  );
};

export default App;
