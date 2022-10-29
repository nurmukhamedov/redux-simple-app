import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts, fetchPosts } from "./postsSlice";

import React, { useEffect } from "react";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const allData = posts.map((post, id) => {
    return <h1 key={id}>{post.name.common}</h1>;
  });
  return (
    <section>
      <h2>Posts</h2>
      {allData}
    </section>
  );
};

export default PostsList;
