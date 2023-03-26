<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"; // eslint-disable-line no-unused-vars
import TodoInput from "./components/TodoInput.vue"; // eslint-disable-line no-unused-vars
import TodoList from "./components/TodoList.vue"; // eslint-disable-line no-unused-vars
import TodoFooter from "./components/TodoFooter.vue"; // eslint-disable-line no-unused-vars

// var my_cmp = {
//   template: "<div>my component</div>",
// };

// new Vue({
//   el: "",
//   components: {
//     my_cmp: my_cmp,
//   },
// });

export default {
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneItem(todoItems) {
      const obj = { completed: false, item: todoItems };
      localStorage.setItem(todoItems, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      //로컬스토리지에 데이터 갱신
      localStorage.removeItem(todoItem, index);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
          //this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
