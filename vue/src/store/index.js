import { createStore } from 'vuex'

// mutations have to be synchronous
// actions can be asynchronous
const store = createStore({
  state: {
    menu: {
      isOpen: false,
      alreadyBeenUsed: false
    },
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN')
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
    },
    register({ commit }, user) {
      return fetch(`http://localhost:8000/api/register`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        method: "POST",
        body: JSON.stringify(user)
      }).then(
        res => res.json()
      ).then(
        res => {
          commit('setUser', res)
          return res
        }
      )
    }
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu
    },
    // userData is the res from register action
    setUser: (state, userData) => {
      // we save the received token from Laravel inside the state
      state.user.token = userData.token
      // same but with the user data
      state.user.data = userData.user
      // we also save this token in the sessionStorage
      // because it needs to stay available in the case
      // of a page reload
      sessionStorage.setItem('TOKEN', userData.token)
    }
  },
  modules: {}
})

export default store
