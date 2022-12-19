import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import AddFriend from './pages/AddFriend';
import ChatList from './pages/ChatList';
import Setting from './pages/Setting';
import Login from './pages/Login';
import ChattingRoom from './pages/ChattingRoom';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add-friend' element={<AddFriend />} />
        <Route path='/chat-list' element={<ChatList />} />
        <Route path='/chatting-room/:id' element={<ChattingRoom />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
