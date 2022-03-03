import { createStore } from 'vuex'
import * as user from './modules/user'

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
  modules: {
    user
  }
})

export default store
