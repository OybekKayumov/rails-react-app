// Posts list link (root path) | Link to create new post (post form)
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to='/'>Posts List</Link>
      {" | "}
      <Link to='/new'>New Post</Link>
    </nav>
  )
}

export default NavBar;
