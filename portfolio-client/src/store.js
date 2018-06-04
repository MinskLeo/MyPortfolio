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
    isChangeWindowHided: false,
    

    icons: [
      "fas fa-address-card",
      "far fa-address-card",
      "fas fa-address-book",
      "far fa-address-book",
      "fas fa-archive",
      "far fa-arrow-alt-circle-left",
      "fas fa-arrow-alt-circle-left",
      "fas fa-arrow-alt-circle-right",
      "far fa-arrow-alt-circle-right",
      "fab fa-angular",
      "fab fa-apple",
      "far fa-arrow-alt-circle-down",
      "fas fa-arrow-alt-circle-down",
      "fas fa-arrow-alt-circle-up",
      "far fa-arrow-alt-circle-up",
      "fas fa-asterisk",
      "fas fa-balance-scale",
      "fab fa-bandcamp",
      "fas fa-baseball-ball",
      "fas fa-basketball-ball",
      "fas fa-bed",
      "far fa-bell",
      "fas fa-beer",
      "fas fa-bicycle",
      "fab fa-bitcoin",
      "fas fa-book",
      "fas fa-bookmark",
      "fas fa-box",
      "fas fa-book-open",
      "fas fa-bell-slash",
      "far fa-bell-slash",
      "fas fa-box-open",
      "fas fa-boxes",
      "fas fa-briefcase",
      "fas fa-bug",
      "fas fa-calendar-alt",
      "far fa-calendar-alt",
      "fas fa-calendar-check",
      "fas fa-calculator",
      "far fa-calendar",
      "fas fa-calendar",
      "far fa-building",
      "fas fa-building",
      "fas fa-burn",
      "far fa-calendar-minus",
      "far fa-calendar-check",
      "fas fa-calendar-times",
      "fas fa-camera",
      "fas fa-camera-retro",
      "fas fa-car",
      "fab fa-cc-visa",
      "fab fa-cc-paypal",
      "fab fa-cc-mastercard",
      "fas fa-chart-bar",
      "fas fa-check",
      "fas fa-chart-line",
      "fas fa-chart-pie",
      "fas fa-certificate",
      "fas fa-check-circle",
      "far fa-check-circle",
      "fab fa-chrome",
      "fas fa-clipboard-check",
      "far fa-clock",
      "fas fa-cloud",
      "fab fa-codepen",
      "fas fa-cogs",
      "fas fa-coins",
      "far fa-comment-alt",
      "fas fa-comment-alt",
      "far fa-comment",
      "fas fa-comment",
      "fas fa-copyright",
      "far fa-copyright",
      "fas fa-compass",
      "fas fa-compact-disc",
      "fas fa-couch",
      "far fa-credit-card",
      "fab fa-css3",
      "fab fa-css3-alt",
      "fas fa-desktop",
      "fas fa-database",
      "fab fa-discord",
      "fas fa-dollar-sign",
      "fas fa-donate",
      "fab fa-github",
      "fab fa-google"
    ],
    formPhase: 1,
    selectedAction: null,
    selectedType: null,
    selectedTitle: null,
    isIconBarOpened: false,
    selectedIcon: null
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
    },
    updateIsIconBarOpened (state, value) {
      state.isIconBarOpened = value;
    },
    updateSelectedIcon (state, icon) {
      state.selectedIcon = icon;
    },
    updateFormPhase (state, phase) {
      state.formPhase = phase;
    },
    updateSelectedAction (state, action) {
      state.selectedAction = action;
    },
    updateSelectedType (state, type) {
      state.selectedType = type;
    },
    updateSelectedTitle (state, title) {
      state.selectedTitle = title;
    }
  },
  actions: {

  },
  getters: {

  }
})
