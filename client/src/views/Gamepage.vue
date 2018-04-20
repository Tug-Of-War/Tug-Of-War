<template>
<div>
  <div class="gamepage d-none d-md-block">
    <!-- <img src="../assets/logo.png"> -->
    <div class="col-md-12">
        <h1 class="heading">TUG OF WAR</h1>
    </div>
    <div class="image-tug col-md-12">
        <div v-if="statusWiggle == true">
            <img src="../assets/image/tow1.gif" />
        </div>
    </div>
    <div class="progress-tug progress col-md-8 offset-md-2">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="{ width: startScoreA + scoreA + '%' }" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" :style="{ width: startScoreB + scoreB + '%' }" aria-valuenow="50" aria-valuemin="100" aria-valuemax="0"></div>
    </div>
    <!-- <button @click="buttonA()"><i class="fa fa-plus-circle" type="" ></i></button> -->
    <!-- <button @click="buttonB()">FIGHT B</button> -->
    <div class="col-md-12">

    </div>
  </div>
  <div class="d-block d-md-none">
    <i class="fas fa-plus-square buttonA" v-if="side==='a'" @click="buttonA()"></i>
    <i class="fas fa-plus-square buttonB" v-if="side==='b'" @click="buttonB()"></i>
    <!-- <button @click="buttonA()" v-if="side==='a'"><img id="button" src="../assets/image/button-blue.png" alt=""></button>
    <button @click="buttonB()" v-if="side==='b'"><img id="button" src="../assets/image/button-red.png" alt=""></button> -->
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
      side: '',
      statusWiggle: true,
      isShake: 'shake' + 0.5 + 's',
      isInfinite: 'infinite'
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

img {
    height: auto;
    width: auto;
}

.progress-tug {
    height:30px
}

#button {
  max-width: 15rem;
}

.buttonA {
    font-size: 250px;
    color: dodgerblue;
}

.buttonB {
    font-size: 250px;
    color: red;
}

.buttonA:hover, .buttonB:hover, img:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
