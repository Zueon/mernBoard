import React from "react";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";
import PostList from "./routes/PostList";
import PostDetail from "./routes/PostDetail";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
};

export default App;
