<template>
  <div id='todoFooter'>
    <hr>
    <button @click='clearTodos'>CLEAR ALL</button>
  </div>
</template>

<script>
export default {
  name:'TodoFooter',
  methods:{
    clearTodos(){
      this.$emit('clearTodos');
    }
  }
}
</script>

<style scoped>
hr{
  border:0;
  width:100%;
  height: 1px;
  background: linear-gradient(270deg, rgba(193,125,223,1) 0%, rgba(45,170,253,1) 100%);
  opacity: 0.6;
}
button{
  font-family: inherit;
  width: 100%;
  padding:0.5rem 0;
  background: linear-gradient(45deg, rgba(193,125,223,1) 0%, rgba(45,170,253,1) 100%);
  border: 0;
  outline: 0;
  color: #fff;
  border-radius: 1rem;
  margin-top: 1rem;
  font-weight: 700;
}
</style>