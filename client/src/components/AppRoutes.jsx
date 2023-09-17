import { Route, Routes } from 'react-router-dom';
import PostsList from '../features/posts/PostList';
import PostDetails from '../features/posts/PostDetails';
import NewPostForm from '../features/posts/NewPostForm';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<PostsList />} />
      <Route path='/post/:id' element={<PostDetails />} />
      <Route path='/new' element={<NewPostForm />} />
    </Routes>
  )
}

export default AppRoutes;
