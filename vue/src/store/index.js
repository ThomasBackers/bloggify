import { createStore } from 'vuex'

// mutations have to be synchronous
// actions can be asynchronous
const store = createStore({
  state: {
    menu: {
      isOpen: false,
      alreadyBeenUsed: false
    }
  },
  getters: {
    getMenu(state) {
      return state.menu
    }
  },
  actions: {
    setMenu({ commit, state }) {
      const menu = {
        isOpen: !state.menu.isOpen,
        alreadyBeenUsed: true
      }
      commit('setMenu', menu)
    }
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu
    }
  },
  modules: {}
})

export default store
