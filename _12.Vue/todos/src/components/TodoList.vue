<template>
  <div id='todoList'>
    <ul>
      <li>할일1</li>
      <li>할일2</li>
      <li>할일3</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {todoItems:[]};//로컬스토리지 내용을 집어넣을 빈 배열 생성
  },
  created(){
    if(localStorage.length > 0){
      for(let i=0; i < localStorage.length; i++){
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
}
</script>

<style scoped>
</style>