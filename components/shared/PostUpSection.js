import React from 'react';
import Post from './Post';

function PostUpSection({ posts }) {
  return (
    <div className="row gy-3 gx-2">
      {posts.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </div>
  );
}

export default PostUpSection;