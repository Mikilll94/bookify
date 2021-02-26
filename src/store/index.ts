import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidePanelOpened: false,
  },
  mutations: {
    OPEN_SIDEPANEL(state) {
      state.sidePanelOpened = true;
    },
    CLOSE_SIDEPANEL(state) {
      state.sidePanelOpened = false;
    },
  },
  actions: {
  },
  modules: {
  },
});
