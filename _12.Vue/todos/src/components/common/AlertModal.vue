<template>
  <transition name="modal">
    <div class="modal">
      <div class="modalContainer shadow">
        <slot name='header' class="header">header</slot>
        <slot name='footer' class="footer">footer</slot>
        <slot name='button' class="button">button</slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style scoped>
.modal{
  position: fixed;
  z-index: 999;
  left:0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(2px);
}
.modalContainer{
  background: white;
  width: 60vw;
  padding: 1.5rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin: 100px auto 0;
  border-radius: 1rem;
}

.modal-move,
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}
.modal-enter,
.modal-leave-to {
  opacity: 0 !important;
}
</style>