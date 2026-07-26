import './App.css';
import {Routes, Route} from 'react-router-dom';

// Import sites
import Home from './sites/Home.js';
import Post from './sites/Post.js';
import Dishes from './sites/Dishes.js';
import Contact from './sites/Contact.js';

// Import components
import Navbar from './components/basic/Navbar.js';
import Author from './components/Author.js';

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <Navbar></Navbar>

      {/* URLs */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Dishes></Dishes>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        {/* Posts and authors */}
        <Route path="/blog/:id_post" element={<Post></Post>}></Route>
        <Route path="/autor/:id_author" element={<Author></Author>}></Route>
      </Routes>
    </div>
  );
}

export default App;
