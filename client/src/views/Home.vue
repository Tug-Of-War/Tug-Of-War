<template>
  <div class="home">
    <input type="text" placeholder="username" v-model="username"><br>
    <button @click="createUser">add username</button><br>
    <input type="text" placeholder="room" v-model="room"><br>
    <button @click="createRoom">Add Room</button><br>
    <input type="text" placeholder="side" v-model="side"><br>
    <button @click="selectSide">Select Side</button><br>
    <br>
    <button @click="startGame">Start Game</button>
    <hr>
    <h2>{{ counter }}</h2>
    <button v-if="side==='a'" @click="tapA">Tap A</button>
    <button v-if="side==='b'" @click="tapB">Tap B</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      username: '',
      side: '',
      room: '',
      counter: 0
    }
  },
  watch: {
    counter: function () {
      this.checkWinner()
      this.counter = this.$store.state.counter
    }
  },
  methods: {
    createRoom: function () {
      this.$store.commit('addRoom', this.room)
    },
    createUser: function () {
      this.$store.commit('addUser', this.username)
    },
    selectSide: function () {
      this.$store.commit('selectSide', this.side)
    },
    startGame: function () {
      this.$store.dispatch('startGame')
    },
    tapA: function () {
      this.$store.dispatch('counterA')
      // this.$store.commit('winner')
      this.$store.dispatch('getCounter')
    },
    tapB: function () {
      this.$store.dispatch('counterB')
      // this.$store.commit('winner')
      this.$store.dispatch('getCounter')
      // this.counter = this.$store.state.counter
    },
    checkWinner: function () {
      if (this.counter === 10) {
        this.winner = 'a'
        alert('winner a')
      } else if (this.counter === -10) {
        this.winner = 'b'
        alert('winner b')
      }
    }
  }
}
</script>
