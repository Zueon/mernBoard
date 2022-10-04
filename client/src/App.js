import React from "react";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";
import PostList from "./routes/posts/PostList";
import PostDetail from "./routes/posts/PostDetail";
import Edit from "./routes/posts/Edit";
import New from "./routes/posts/New";
import Signup from "./routes/users/Signup";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/:id/edit" element={<Edit />} />
        <Route path="/posts/new" element={<New />} />
        <Route path="/users/new" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
