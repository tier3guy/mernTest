import './App.css';
import Nav from './Components/JSX/Nav';
import Registration from './Components/JSX/Registration';
import Students from './Components/JSX/Students';
import Home from './Components/JSX/Home';

import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/registration" element = {<Registration/>}/>
        <Route path="/students" element = {<Students/>}/>
      </Routes>
    </div>
  );
}

export default App;
