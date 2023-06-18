import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import CreateBlog from './pages/CreateBlog';
import CreateWall from './pages/CreateWall';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Myboards from './pages/Myboards';
function App() {
  return (
    <>
      <Navbar title="Create Wall"/> 
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LandingPage/>}></Route>
          <Route path='/create-blog' element={<CreateBlog/>}></Route>
          <Route path='/create-wall' element={<CreateWall/>}></Route>
          <Route path='/myboards' element={<Myboards/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
