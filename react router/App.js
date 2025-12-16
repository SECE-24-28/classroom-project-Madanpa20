import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import Books from './Books';  
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <h2>welcome</h2>
      <ul>
        <Link to="/Home"><li>Home</li></Link>
        <Link to="/aboutus"><li>About Us</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
        <Link to="/User/1"><li>User1</li></Link>
        <Link to="/User/2"><li>User2</li></Link>
        <Link to="/books/newbooks"><li>Books</li></Link>
        <Link to="/books/oldbooks"><li>Books</li></Link>

      </ul>
        <Routes>
        <Route path="/Home" element={<Home/>}></Route>
         <Route path="/aboutus" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/User/:id" element={<User/>}></Route>
         <Route path="/book">
         <Route path="newbook" element={<Books/>}></Route>
          <Route path="oldbook" element={<Books/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
