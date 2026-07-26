import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

// Import sites
import Home from './sites/Home.js';
import Blog from './sites/Blog.js';
import Contact from './sites/Contact.js';

// Import components
import Post from './components/Post.js';
import Author from './components/Author.js';

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blog">Menu</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* URLs */}
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
