import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  // plugins: [createPersistedState({ key: 'session', storage: window.sessionStorage })],
  state: {
    // token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    // setToken (state, token) {
    //   state.token = token
    //   if (token) {
    //     state.isUserLoggedIn = true
    //   } else {
    //     state.isUserLoggedIn = false
    //   }
    // },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    // setToken ({commit}, token) {
    //   commit('setToken', token)
    // },
    // setUser ({commit}, user) {
    //   commit('setUser', user)
    // },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setUser', user)
      })
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setUser', user)
      })
    },
    logUserOut ({commit}) {
      firebase.auth().signOut()
      .then(() => {
        commit('setUser', null)
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    userIsAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    }
  }
})
