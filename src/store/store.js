import { createStore } from "vuex";

// Create a new store instance.
//const store = createStore({
export default createStore({
  state() {
    return {
      headerText: "vuex!!!!",
    };
  },
});
