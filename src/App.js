import React from 'react';
import JoinRoom from './pages/JoinRoom';
import Room from "./pages/Room";
import './App.css';
import Navbar from './components/Navbar'
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import ThemePage from './pages/themePage';
import Login from './pages/login';
import EnterCode from './pages/enterCode';
import Home from "./pages/home";
import Account from "./pages/account";
import CreateStory from "./pages/createStory"

function App() {
  return (

      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/join-room" exact element={<JoinRoom />} />
            <Route path="/room/:roomId" element={<Room />} />
            <Route path = '/home'  element={<Home />} />
            <Route path = '/choose-a-theme' element = {<ThemePage />} />
            <Route path = '/login' element ={<Login />} />
            <Route path = '/enter-code'  element={<EnterCode />} />
            <Route path= '/account' element={<Account />} />
            <Route path ='/create-story' element={<CreateStory />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
