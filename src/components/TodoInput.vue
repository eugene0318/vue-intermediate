<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem" />
    <!-- <span class="addContainer" v-on:click="addTodo">
      
      <i class="fas fa-plus addBtn" aria-hidden="true"></i>
    </span> -->

    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <template v-slot:header
        ><h3>
          경고
          <i
            class="closeModalBtn fas fa-times"
            @click="showModal = false"
          ></i></h3
      ></template>
      <template v-slot:body>
        <div>무언가를 입력하세요</div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/VueModal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      newTodoItem: "", // v-model = 2-way binding.(template <-> script)
      showModal: false,
    };
  },
  methods: {
    addTodoItem() {
      if (this.newTodoItem !== "") {
        // this.$emit('이벤트명', 인자1, 인자2, ...);
        this.$emit("addTodoItem", this.newTodoItem);
        //this.$store.commit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
