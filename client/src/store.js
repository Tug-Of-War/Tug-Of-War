import './firebase'
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueFire)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    room: '',
    username: '',
    side: '',
    counter: 0,
    winner: ''
  },
  mutations: {
    addRoom: function (state, payload) {
      state.room = payload
      console.log(state.room)
    },
    addUser: function (state, payload) {
      state.username = payload
      console.log(state.username)
    },
    selectSide: function (state, payload) {
      state.side = payload
      console.log(state.side)
    },
    counter: function (state, payload) {
      state.counter = payload
    },
    winner: function (state, payload) {
      if (state.counter === 10) {
        state.winner = 'a'
      } else if (state.counter === -10) {
        state.winner = 'b'
      }
    }
  },
  actions: {
    startGame: function ({state, commit}, payload) {
      firebase.database().ref().child('room/' + state.room + '/' + state.username).set({
        username: state.username,
        side: state.side
      })
      localStorage.setItem('side', state.side)
      localStorage.setItem('username', state.username)
      localStorage.setItem('room', state.room)
    },
    counter: function ({state, commit}, payload) {
      let room = localStorage.getItem('room')
      firebase.database().ref().child('room/' + room).update({
        counter: payload
      })
      commit('counter', payload)
    }
  }
})
