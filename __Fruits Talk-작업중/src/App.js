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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDataListAction } from './redux/action/userDataListAction';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase';
import { updateChatrooms, updateMessages, updateUserData, updateUserLoginData } from './redux/reducer/userDataListReducer';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getDataListAction.getUserData())
  },[])


  const qUserData =  query(collection(db,"userData"));
  const qChatrooms =  query(collection(db,"chatrooms"));
  const qMessages =  query(collection(db,"messages"));
  const qUserLoginData =  query(collection(db,"userLoginData"));

  const unsubscribeUserData = onSnapshot(qUserData, (querySnapshot) => {
    let userData=[];
    querySnapshot.forEach((doc)=>{return userData = [...userData, doc.data()]});
    dispatch(updateUserData({userData}))
  })
  const unsubscribeChatrooms = onSnapshot(qChatrooms, (querySnapshot) => {
    let chatrooms=[];
    querySnapshot.forEach((doc)=>{return chatrooms = [...chatrooms, doc.data()]});
    dispatch(updateChatrooms({chatrooms}))
  })
  const unsubscribeMessages = onSnapshot(qMessages, (querySnapshot) => {
    let messages=[];
    querySnapshot.forEach((doc)=>{return messages = [...messages, doc.data()]});
    messages.forEach((item) => item.timestamp = item.timestamp.toDate().toString())
    dispatch(updateMessages({messages}))
  })
  const unsubscribeUserLoginData = onSnapshot(qUserLoginData, (querySnapshot) => {
    let userLoginData=[];
    querySnapshot.forEach((doc)=>{return userLoginData = [...userLoginData, doc.data()]});
    dispatch(updateUserLoginData({userLoginData}))
  })

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
