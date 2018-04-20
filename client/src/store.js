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
    winner: '',
    allPlayers: [],
    allRooms: []
  },
  mutations: {
    addRoom: function (state, payload) {
      state.room = payload
      console.log(state.room)
    },
    addUser: function (state, payload) {
      state.username = payload
      localStorage.setItem('player', payload)
      console.log(state.username)
    },
    selectSide: function (state, payload) {
      state.side = payload
      console.log(state.side)
    },
    counterA: function (state, payload) {
      console.log(state.counter, 'counter A sebelum')
      state.counter++
      console.log(state.counter, 'counter A')
    },
    counterB: function (state, payload) {
      console.log(state.counter, 'counter B sebelum')
      state.counter--
      console.log(state.counter, 'counter B')
    },
    getCounter: function (state, payload) {
      state.counter = payload
    },
    winner: function (state, payload) {
      if (state.counter > 10) {
        state.winner = 'a'
      } else if (state.counter < -10) {
        state.winner = 'b'
      }
    },
    getAllPlayers: function (state, payload) {
      console.log('ini payload', payload)
      state.allPlayers = payload
      // state.allPlayers.push(payload)
    },
    getAllRooms: function (state, payload) {
      console.log('ini payload', payload)
      state.allRooms = payload
      // state.allPlayers.push(payload)
    },
    updatedRoom: function (state, payload) {
      let index = state.allRooms.findIndex(room => room.names === payload.names)
      state.allRooms[index] = payload
      state.allRooms.splice(index, 1, payload)
      console.log(state.allRooms, 'in hasilnya')
    }
  },
  actions: {
    startGame: function ({state, commit}, payload) {
      localStorage.setItem('side', state.side)
      localStorage.setItem('username', state.username)
      localStorage.setItem('room', state.room)
      firebase.database().ref('room/' + state.room + '/counter').set({
        counter: 0
      })
      firebase.database().ref().child('room/' + state.room + '/' + state.username).set({
        username: state.username,
        side: state.side
      })
      firebase.database().ref('room/' + state.room + '/counter').on('value', function (snapshot) {
        console.log(snapshot.val(), 'ini snap')
        state.counter = snapshot.val().counter
      })
    },
    setZero: function (context, payload) {
      // let room = localStorage.getItem('room')
    },
    counterA: function ({state, commit}, payload) {
      commit('counterA')
      let room = localStorage.getItem('room')
      firebase.database().ref().child('room/' + room + '/counter').update({
        counter: state.counter
      })
    },
    counterB: function ({state, commit}, payload) {
      commit('counterB')
      let room = localStorage.getItem('room')
      firebase.database().ref().child('room/' + room + '/counter').update({
        counter: state.counter
      })
    },
    getCounter: function (context, payload) {
      let room = localStorage.getItem('room')
      firebase.database().ref().child('room/' + room + '/counter').on('value', function (snapshot) {
        context.commit('getCounter', snapshot.val().counter)
      })
    },
    addUser: function (context, payload) {
      firebase.database().ref('allplayers/' + payload).set({
        username: payload
      })
      let getPlayers = []
      firebase.database().ref().child('/allplayers').on('value', function (snapshot) {
        // snapshot.val().forEach(element => {
        //   getPlayers.push(element.username)
        snapshot.forEach((childSnapshot) => {
          let childData = childSnapshot.val()
          getPlayers.push(childData)
          console.log(childSnapshot.val(), 'in snap shot')
        })
        console.log('ini dari actions', getPlayers)
        context.commit('getAllPlayers', getPlayers)
        getPlayers = []
      })
      context.commit('addUser', payload)
    },
    addRoom: function (context, payload) {
      let masterPlayer = localStorage.getItem('player', payload)
      firebase.database().ref('allrooms/' + payload).set({
        names: payload,
        master: masterPlayer,
        member: 1
      })
      let getrooms = []
      firebase.database().ref().child('/allrooms').on('value', function (snapshot) {
        snapshot.forEach((childSnapshot) => {
          let childData = childSnapshot.val()
          childData.member = 1
          getrooms.push(childData)
        })
        console.log('ini dari actions', getrooms)
        context.commit('getAllRooms', getrooms)
        getrooms = []
      })
      context.commit('addRoom', payload)
    },
    getAllDatas: function (context) {
      let getplayers = []
      firebase.database().ref('allplayers/').on('value', function (snapshot) {
        snapshot.forEach((childSnapshot) => {
          let childData = childSnapshot.val()
          childData.member = 1
          getplayers.push(childData)
        })
        context.commit('getAllPlayers', getplayers)
        getrooms = []
      })
      let getrooms = []
      firebase.database().ref('allrooms/').on('value', function (snapshot) {
        snapshot.forEach((childSnapshot) => {
          let childData = childSnapshot.val()
          childData.member = 1
          getrooms.push(childData)
        })
        context.commit('getAllRooms', getrooms)
        getrooms = []
      })
    },
    joinGroup: function (context, payload) {
      let groupName = payload.names
      let getRoomData = context.state.allRooms.filter(room => room.names === groupName)[0]
      firebase.database().ref('allrooms/' + getRoomData.names).update({
        names: getRoomData.names,
        member: getRoomData.member + 1
      })
      firebase.database().ref('allrooms/' + groupName).once('value', function (snapshot) {
        console.log(snapshot.val())
        context.commit('updatedRoom', snapshot.val())
      })
    }
  }
})
