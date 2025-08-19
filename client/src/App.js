import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import Post from './components/Post.js';
import Author from './components/Author.js';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        {/*Para llevar a un parámetro en específico*/}
        <Route path="/blog/:id_post" element={<Post></Post>}></Route>
        <Route path="/autor/:id_author" element={<Author></Author>}></Route>
      </Routes>
    </div>
  );
}

export default App;
