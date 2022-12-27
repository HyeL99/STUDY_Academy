<template>
  <form v-on:submit="addTodo" class="shadow">
    <input type="text" placeholder="할 일을 입력해주세요." v-model="newTodoItem"/>
    <button type="submit"><i class="fa-solid fa-plus"></i></button>
  </form>
</template>

<script>
export default {
  name:'TodoInput',
  data(){
    return {newTodoItem:""}
  },
  
  methods:{
    addTodo:function(e){
      e.preventDefault();

      let value = this.newTodoItem.trim().replace(/ +/g, " ");

      //value값 공백 방지
      if(value.length === 0 || value === ' '){
        alert('할 일을 입력해주세요');
      } else {
        //localStorage.setItem(value,value); - 직접 저장하지 않고 부모에게 전달
        //setItem(key,value) - 로컬스토리지에 데이터를 추가하는 API
        this.$emit('addTodo',value); //상위 App.vue에 addTodo, value 전달
      }
      //this.newTodoItem='';
      this.clearInput();  //분리, 단일책임원칙
    },
    clearInput:function(){  //인풋박스 입력 후 초기화
      this.newTodoItem='';
    }
  },
}
</script>

<style scoped>
form{
  display: flex;
  border-radius: 1rem;
  overflow: hidden;

}
form input{
  flex-grow: 1;
  padding: 0.8rem 1rem;
  border: 0;
  outline: 0;
}
form button{
  width: 50px;
  border: 0;
  background: linear-gradient(45deg, rgba(193,125,223,1) 0%, rgba(45,170,253,1) 100%);
  color:#fff;
  font-size: 1.1rem;
}
</style>