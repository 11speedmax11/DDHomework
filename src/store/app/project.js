export default {
  namespaced: true,
  state: {
    search: null,
    sorting: null,
    sortOrderValues: false,
    page: 0,
  },

  getters: {

    search(state) {
      return state.search;
    },
    sorting(state) {
      return state.sorting;
    },
    sortOrderValues(state) {
      return state.sortOrderValues;
    },
    page(state) {
      return state.page;
    }
  },

  mutations: {

    updateSearch(state, payload) {
      state.search = payload;
    },
    updateOrder(state, payload) {
      state.sorting = payload;
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
    setOrder({ commit }, payload) {
      commit('updateOrder', payload);
    },
    setSortOrderValues({ commit }, payload) {
      commit('updatesortOrderValues', payload);
    },
    setPage({ commit }, payload) {
      commit('updatePage', payload);
    },
  },

}