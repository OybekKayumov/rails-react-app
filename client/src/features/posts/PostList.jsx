// API_URL comes from the .env.development
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { API_URL } from '../../constants';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  //TODO: Fetch posts from the API
  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch(API_URL);
        if (res.ok) {
          const json = await res.json();
          setPosts(json);
        } else {
          throw res;
        }
      } catch (e) {
        setError('An error occurred. Awkward...');
        console.log('An error occurred: ', e);
      } finally {
        setLoading(false)
      }
    }

    loadPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className='post-container'>
          <h2>
            <Link to={`/posts/${post.id}`} className='post-title'>
            {post.title}
            </Link>
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostsList;
