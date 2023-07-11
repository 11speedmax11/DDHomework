export default {
  namespaced: true,
  state: {
    loading: false,
    currentModal: {
      isOpen: false,
      componentName: null,
      titleModal: null,
      action: null,
    },
    userList: null,
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    currentModal(state) {
      return state.currentModal;
    },
    userList(state) {
      return state.userList;
    },

  },
  mutations: {

    updateLoading(state, payload) {
      state.loading = payload;
    },
    updateCurrentModal(state, payload) {
      state.currentModal = payload;
    },
    updateUserList(state, payload) {
      state.userList = payload;
    },

  },
  actions: {

    setLoading({ commit }, payload) {
      commit('updateLoading', payload);
    },
    setCurrentModal({ commit }, payload) {
      commit('updateCurrentModal', payload);
    },
    closeCurrentModal({ commit }) {
      commit('updateCurrentModal', {
        isOpen: false,
        componentName: null,
        titleModal: null,
        action: null,
      });
    },
    setUserList({ commit }, payload) {
      commit('updateUserList', payload);
    },
  },

}