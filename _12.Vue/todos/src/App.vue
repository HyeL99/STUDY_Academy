<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodo='addTodo' />
    <TodoList v-bind:propsdata='todoItems' @removeTodo='removeTodo'/>
    <!-- v-bind:프롭스 속성 이름='상위컴포넌트의 데이터이름' -->
    <TodoFooter @clearTodos='clearTodos'/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',
  data(){
    return {todoItems:[]};//로컬스토리지 내용을 집어넣을 빈 배열 생성
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  methods:{
    addTodo(todoItem){
      if(!this.todoItems.includes(todoItem)){
        localStorage.setItem(todoItem,todoItem);
        this.todoItems.push(todoItem)
      }
    },
    clearTodos(){
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(todoItem,index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1)
    }
  },
  created(){
    if(localStorage.length > 0){
      for(let i=0; i < localStorage.length; i++){
        this.todoItems.push(localStorage.key(i));
      }
      console.log(this.todoItems)
    }
  }
}
</script>

<style>
@font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Light';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
html,body{
  padding:0;
  margin:0;
  background: aliceblue;

}
#app {
  font-family: 'Pretendard-Light', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 600px;
  margin: 30px auto 0;
  padding: 0 3vw;
}
.shadow{
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
