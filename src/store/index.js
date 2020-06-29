import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 避免浏览器禁用本地存储后localstorage报错
let defaultCity = "北京";
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    city: defaultCity,
  },
  mutations: {
    change(state, city) {
      state.city = city;
      try {
        localStorage.city = city;
      } catch (e) {}
    },
  },
  //非批量 复杂 或 异步操作，可直接使用mutations
  actions: {
    changeCity(ctx, city) {
      ctx.commit("change", city);
    },
  },
  getters: {
    doubleCity(state) {
      return state.city + " " + state.city;
    },
  },
  modules: {},
});
