<template>
  <div>
    <slot></slot>
    <dialog></dialog>
  </div>
</template>


<script>
export default {

  data() {
    return {
      msg: "",
      type: "",
      modal: false,
      loading: false,
    }
  },

}
</script>
