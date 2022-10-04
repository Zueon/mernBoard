import React from "react";
import { useEffect, useState } from "react";
import PostItem from "../../components/PostItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await fetch("http://localhost:5500/posts");

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const postlist = await response.json();
    setPosts(postlist);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const postItems = posts.map((post, idx) => (
    <PostItem post={post} key={idx} />
  ));

  return (
    <div className="container mb-3">
      <h2 className="mb-3">Board</h2>
      <table className="board-table table table-sm border-bottom">
        <thead className="thead-light">
          <tr>
            <th scope="col">Title</th>
            <th scope="col" className="date">
              Date
            </th>
          </tr>
        </thead>
        <tbody>{postItems}</tbody>
      </table>
      <div>
        <a className="btn btn-primary" href="/posts/new">
          New
        </a>
      </div>
    </div>
  );
};

export default PostList;
