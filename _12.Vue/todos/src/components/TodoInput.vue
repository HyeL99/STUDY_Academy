<template>
  <form v-on:submit="addTodo" class="shadow">
    <input type="text" placeholder="할 일을 입력해주세요." v-model="newTodoItem"/>
    <button type="submit"><i class="fa-solid fa-plus"></i></button>
    <AlertModal v-if='showModal'>
      <h2 slot='header'>경고</h2>
      <p slot='footer'>
        할 일을 입력해주세요.
      </p>
      <span slot='button' class='modalBtn' v-on:click="closeModal">확인</span>
    </AlertModal>
  </form>
    
</template>

<script>
import AlertModal from './common/AlertModal.vue'
export default {
  name:'TodoInput',
  data(){
    return {
      newTodoItem:"",
      showModal: false
    }
  },
  
  methods:{
    addTodo:function(e){
      e.preventDefault();

      let value = this.newTodoItem.trim().replace(/ +/g, " ");

      //value값 공백 방지
      if(value.length === 0 || value === ' '){
        this.showModal=true;
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
    },
    closeModal(){
      this.showModal=false;
    }
  },
  components:{
    AlertModal
  }
}
</script>

<style scoped>
form{
  display: flex;
  border-radius: 1rem;
  overflow: hidden;

}
h2,p{
  margin:0;
  color: rgb(193,125,223);
}
h2{
  font-family: 'Pretendard-Bold', sans-serif;
}
p{
  font-size: 1.15rem;
}
.modalBtn{
  align-self: end;
  padding: 0.4rem 2rem;
  border:0;
  background: linear-gradient(45deg, rgba(193,125,223,1) 0%, rgba(45,170,253,1) 100%);
  color:#fff;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: 'Pretendard-Bold', sans-serif;
  cursor: pointer;
  white-space: nowrap;

}
form input{
  flex-grow: 1;
  padding: 0.8rem 1rem;
  border: 0;
  outline: 0;
}
form > button{
  width: 50px;
  border: 0;
  background: linear-gradient(45deg, rgba(193,125,223,1) 0%, rgba(45,170,253,1) 100%);
  color:#fff;
  font-size: 1.1rem;
}
</style>