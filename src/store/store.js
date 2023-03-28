import { createStore } from "vuex";

// Create a new store instance.

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //this.todoItems.push(localStorage.key(i));
        }
      }
    }
    return arr;
  },
};
//const store = createStore({

export default createStore({
  state() {
    return {
      todoItems: storage.fetch(),
    };
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
  },
});
