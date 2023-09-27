import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state: {
    category: null,
  },
  mutations: {
    SET_CATEGORY(state, category) {
      state.category = category;
    },
  },
  actions: {
    setCategory({ commit }, category) {
      commit('SET_CATEGORY', category);
    },
  },
});

export default store;
