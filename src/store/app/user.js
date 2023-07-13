export default {
  namespaced: true,
  state: {
    search: null,
    sortOrderValues: "asc",
    page: 1,
  },
  getters: {

    search(state) {
      return state.search;
    },
    sortOrderValues(state) {
      return state.sortOrderValues;
    },
    page(state) {
      return state.page;
    },
  },

  mutations: {

    updateSearch(state, payload) {
      state.search = payload;
    },
    updatesortOrderValues(state, payload) {
      state.sortOrderValues = payload;
    },
    updatePage(state, payload) {
      state.page = payload;
    },
  },
  actions: {

    setSearch({ commit }, payload) {
      commit('updateSearch', payload);
    },
    setSortOrderValues({ commit }, payload) {
      commit('updatesortOrderValues', payload);
    },
    setPage({ commit }, payload) {
      commit('updatePage', payload);
    },
  },
}