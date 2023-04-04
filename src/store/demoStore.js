/* package.json, node_modules 라이브러리 밑에 잡혀있는 core library를 가져옴 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // 전역으로 플러그인을 사용

export const store = new Vuex.Store({
  state: {
    price: 100,
  },
  getters: {
    originalPricee(state) {
      return state.price;
    },
    doublePrice(state) {
      return state.price * 2;
    },
    triplePrice(state) {
      return state.price * 3;
    },
  },
});
