export default {
  namespaced: true,
  state: {
    filter: {
      status: [],
      author: null,
      executor: null,
      dateStart: null,
      dateEnd: null
    },
    search: null,
    sorting: null,
    sortOrderValues: false,
  },

  mutations: {
    updateFilter(state, payload) {
      state.filter = payload;
    },
    updateSearch(state, payload) {
      state.search = payload;
    },
    updateOrder(state, payload) {
      state.sorting = payload;
    },
    updatesortOrderValues(state, payload) {
      state.sortOrderValues = payload;
    },
  },
  actions: {
    setFilter({ commit }, payload) {
      commit('updateFilter', payload);
    },
    setSearch({ commit }, payload) {
      commit('updateSearch', payload);
    },
    setOrder({ commit }, payload) {
      commit('updateOrder', payload);
    },
    setSortOrderValues({ commit }, payload) {
      commit('updatesortOrderValues', payload);
    },
  },
  getters: {
    filter(state) {
      return state.filter;
    },
    search(state) {
      return state.search;
    },
    sorting(state) {
      return state.sorting;
    },
    sortOrderValues(state) {
      return state.sortOrderValues;
    },
  },
}