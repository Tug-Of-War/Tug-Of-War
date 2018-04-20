<template>
<div>
  <div class="gamepage d-none d-md-block">
    <!-- <img src="../assets/logo.png"> -->
    <div class="col-md-12">
        <h1 class="heading">TUG OF WAR</h1>
    </div>
    <div class="image-tug col-md-12">
        <img src="../assets/image/tow1.gif" />
    </div>
    <div class="progress-tug progress col-md-8 offset-md-2">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="{ width: startScoreA + scoreA + '%' }" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" :style="{ width: startScoreB + scoreB + '%' }" aria-valuenow="50" aria-valuemin="100" aria-valuemax="0"></div>
    </div>
    <button @click="buttonA()"><i class="fa fa-plus-circle" type="" ></i></button>
    <button @click="buttonB()">FIGHT B</button>
  </div>
  <div class="d-block d-md-none">
    <button @click="buttonA()" v-if="side==='a'"><img id="button" src="../assets/image/button-blue.png" alt=""></button>
    <button @click="buttonB()" v-if="side==='b'"><img id="button" src="../assets/image/button-red.png" alt=""></button>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'gamepage',
  data () {
    return {
      nickname: '',
      startScoreA: 0,
      startScoreB: 0,
      scoreA: 50,
      scoreB: 50,
      side: ''
    }
  },
  components: {
    HelloWorld
  },
  created () {
    this.side = localStorage.getItem('side')
  },
  methods: {
    enterRoom () {
      console.log(this.nickname)
    },
    buttonA () {
      // this.scoreA += 1
      // this.scoreB -= 1
      this.$store.dispatch('getCounter')
      this.$store.dispatch('counterA')
      this.startScoreA = this.$store.state.counter
      this.startScoreB = 0 - this.$store.state.counter
      console.log('ini dari button A point A:', this.scoreA + this.startScoreA)
      console.log('ini dari button A point B:', this.scoreB + this.startScoreB)
    },
    buttonB () {
      // this.scoreA -= 1
      // this.scoreB += 1
      this.$store.dispatch('getCounter')
      this.$store.dispatch('counterB')
      this.startScoreA = this.$store.state.counter
      this.startScoreB = 0 - this.$store.state.counter
      console.log('ini dari button A point A:', this.scoreA + this.startScoreA)
      console.log('ini dari button A point B:', this.scoreB + this.startScoreB)
    }
  },
  computed: mapState([
    'counter'
  ])
}
</script>

<style scoped>

.gamepage {
    border: 1px solid black;
    font-family: 'Ubuntu', sans-serif;
    height: 60rem;
}

.heading {
    font-size: 100px;
    margin-top: 10px;
}

.progress-tug {
    height:30px
}

#button {
  max-width: 15rem;
}

</style>
