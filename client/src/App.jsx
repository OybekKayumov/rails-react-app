import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
// import PostsList from './features/posts/PostList'
import NavBar from './components/NavBar'
import AppRoutes from './components/AppRoutes'

function App() {
  
  return (
    <Router>
      <div>
        <h1>React on Rails Blog</h1>

        <NavBar />

        {/* <PostsList /> */}
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
