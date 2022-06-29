import Navbar from './Navbar';
import Home from './Home';
import Blog from './pages/Blog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './pages/CreateBlog';
import { TodoDetail } from './TodoDetails';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="max-w-xl mx-auto p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/createblog" element={<Create />} />
            <Route path="/pages/blog" element={<Blog />} />
            <Route path="/pages/blog/:id" element={<BlogDetails />} />
            <Route path="todo/:id" element={<TodoDetail /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
