export default {
  namespaced: true,
  state: {
    search: null,
    sortOrderValues: false,
  },

  mutations: {

    updateSearch(state, payload) {
      state.search = payload;
    },
    updatesortOrderValues(state, payload) {
      state.sortOrderValues = payload;
    },
  },
  actions: {

    setSearch({ commit }, payload) {
      commit('updateSearch', payload);
    },
    setSortOrderValues({ commit }, payload) {
      commit('updatesortOrderValues', payload);
    },
  },
  getters: {

    search(state) {
      return state.search;
    },
    sortOrderValues(state) {
      return state.sortOrderValues;
    },
  },
}