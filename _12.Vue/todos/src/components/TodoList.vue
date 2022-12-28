<template>
  <div id='todoList'>
    <ul>
      <TransitionGroup name="list" tag="ul">
        <li v-for="(todoItem,index) in propsdata" :key='index' class="shadow listItem">
          <i class="checkBtn fa-regular fa-square-check"></i>
          <span class="text">{{todoItem}}</span>
          <button class="removeBtn" @click='removeTodo(todoItem,index)'>
            <i class="fa-solid fa-eraser"></i>
          </button>
        </li>
      </TransitionGroup>
    </ul>
  </div>
</template>

<script>
export default {
  /* App.vue 컴포넌트로 이동
  data(){
    return {todoItems:[]};//로컬스토리지 내용을 집어넣을 빈 배열 생성
  },
  */
 /* App.vue 컴포넌트로 이동
  created(){
    if(localStorage.length > 0){
      for(let i=0; i < localStorage.length; i++){
        this.todoItems.push(localStorage.key(i));
      }
      console.log(this.todoItems)
    }
  },
  */
  props:['propsdata'],
  methods:{
    removeTodo:function(todoItem,index){
      //console.log('key',index,'value',todoItem)
      // localStorage.removeItem(todoItem);
      // this.todoItems.splice(index,1)
      this.$emit('removeTodo',todoItem,index)
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
  text-align: start;
  padding:0;
}
li{
  display: flex;
  align-items: center;
  background: white;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  height: 2.5rem;
  overflow: hidden;
}
.checkBtn{
  color: rgb(45,170,253);
  padding:  0.5rem 1rem;
}
.text{
  flex-grow: 1;
  width: 100%;
  padding:  0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.removeBtn{
  color: rgb(193,125,223);
  height: 2.5rem;
  width: 4rem;
  border: 0;
  background: none;
  cursor: pointer;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>