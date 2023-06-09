import { createStore } from "vuex";
import * as getters from "./getters";
import * as mutations from ",/mutations";
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
  getters: {
    // storedTodoItems(state) {
    //   return state.todoItems;
    // },
    getters,
  },
  mutations: {
    // addOneItem(state, todoItem) {
    //   const obj = { completed: false, item: todoItem };
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   state.todoItems.push(obj);
    // },
    // removeOneItem(state, payload) {
    //   localStorage.removeItem(payload.todoItem.item);
    //   state.todoItems.splice(payload.index, 1);
    // },
    // toggleOneItem(state, payload) {
    //   state.todoItems[payload.index].completed =
    //     !state.todoItems[payload.index].completed;
    //   //로컬스토리지에 데이터 갱신
    //   localStorage.removeItem(payload.todoItem, payload.index);
    //   localStorage.setItem(
    //     payload.todoItem.item,
    //     JSON.stringify(payload.todoItem)
    //   );
    // },

    // clearAllItems(state) {
    //   localStorage.clear();
    //   state.todoItems = [];
    // },
    mutations,
  },
});
