import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ErrorLoger (error) {
      console.log('Error: '+error.message+' ('+error.request.responseURL+')');
    },

    contacts: '123',
    contentpart_blocks: null,
    sidebar_blocks: null,

    key: null,
    isChangeWindowHided: true
  },
  mutations: {
    updateContactsInfo (state, contacts) {
      state.contacts = contacts;
    },
    updateSidebarBlocks (state, blocks) {
      state.sidebar_blocks = blocks;
    },
    updateContentpartBlocks (state, blocks) {
      state.contentpart_blocks = blocks;
    },
    updateAccessKey (state, key) {
      state.key = key;
    },
    updateIsChangeWindowHided(state, value) {
      state.isChangeWindowHided = value;
    }
  },
  actions: {

  },
  getters: {

  }
})
