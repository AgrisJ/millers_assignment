import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state: {
    category: null,
    style: null,
  },
  mutations: {
    SET_CATEGORY(state, category) {
      state.category = category;
    },
    SET_STYLE(state, style) {
      state.style = style;
    },
  },
  actions: {
    setCategory({ commit }, category) {
      commit('SET_CATEGORY', category);
    },
    setStyle({ commit }, style) {
      commit('SET_STYLE', style);
    },
  },
});

export default store;
