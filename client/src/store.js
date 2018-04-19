import './firebase'
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [{
      id: 1,
      status: 'ready',
      count: 50,
      member: 5,
      master: 'rama'
    }, {
      id: 2,
      status: 'ready',
      count: 50,
      member: 7,
      master: 'dimas'
    }, {
      id: 3,
      status: 'ready',
      count: 50,
      member: 10,
      master: 'dimas'
    }],
    teams: [],
    users: [{
      id: 1,
      nickname: 'rama'
    }, {
      id: 2,
      nickname: 'rama1'
    }, {
      id: 3,
      nickname: 'rama2'
    }, {
      id: 4,
      nickname: 'rama3'
    }, {
      id: 5,
      nickname: 'rama4'
    }, {
      id: 6,
      nickname: 'rama5'
    }]
  },
  mutations: {
    joinGroup (group) {
      // masukin user ini ke group id
      console.log('masuk sini', group)
    },
    addRoom (newRoom) {
      // nambahin room dengan masternya si user
      console.log('add room', newRoom)
    }
  },
  actions: {

  }
})
