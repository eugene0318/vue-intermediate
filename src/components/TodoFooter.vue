<template lang="">
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo"> clear all </span>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      clearTodo: "clearAllItems",
    }),
    // clearTodo() {
    //   //this.$emit("clearAll");
    //   this.$store.commit("clearAllItems");
    // },
  },
};
</script>
<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
.syncBtn {
  color: #e20303;
  background-color: white;
  display: block;
}
</style>
