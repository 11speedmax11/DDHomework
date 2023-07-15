export default {
  namespaced: true,
  state: {
    filter: {
      name: null,
      status: null,
      author: null,
      executor: null,
      projectId: null,
      dateStart: null,
      dateEnd: null
    },
    sort: {
      sorting: 'name',
      sortOrderValues: 'asc',
    },
    page: 1,
  },

  getters: {
    filter(state) {
      return state.filter;
    },
    name(state) {
      return state.filter.name;
    },
    sorting(state) {
      return state.sort.sorting;
    },
    sortOrderValues(state) {
      return state.sort.sortOrderValues;
    },
    page(state) {
      return state.page;
    }
  },

  mutations: {
    updateFilter(state, payload) {
      state.filter = payload;
    },
    updateName(state, payload) {
      state.filter.name = payload;
    },
    updateOrder(state, payload) {
      state.sort.sorting = payload;
    },
    updatesortOrderValues(state, payload) {
      state.sort.sortOrderValues = payload;
    },
    updatePage(state, payload) {
      state.page = payload;
    },
  },

  actions: {
    setFilter({ commit }, payload) {
      commit('updateFilter', payload);
    },
    setName({ commit }, payload) {
      commit('updateName', payload);
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
    setUserTasks({ commit }, payload) {
      commit('updatePage', 1);
      commit('updatesortOrderValues', "asc");
      commit('updateOrder', "name");
      commit('updateFilter', payload);
    },
  },
}