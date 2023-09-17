import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constants";

function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect (() => {
    const fetchCurrentPost = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (res.ok) {
          const json = await res.json();
          setPost(json);
        } else {
          throw res;
        }
      } catch (error) {
        console.log('An error occurred: ', error);
      }
    };

    fetchCurrentPost();
  }, [id])

  if (!post) return <h2>Loading...</h2>
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link to='/'>Back to Posts</Link> 
    </div>
  )
}

export default PostDetails;
