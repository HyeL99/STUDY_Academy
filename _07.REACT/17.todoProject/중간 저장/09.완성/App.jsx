import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';

//어떤 필터가 있는지 컴포넌트 밖에서 정의
const filters = ['all','active','completed']
function App() {

  const [filter, setFilter] = useState(filters[0]); //초기값으로는 필터 중에  all 
  
  return (
    <>
      <Navbar filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter} />
    </>
  );
}

export default App;
