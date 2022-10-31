// 배열을 이용해 여러 효과
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <UserList />
    </>
  );
}

export default App;
