<template>
  <div class="gamepage">
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
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="{ width: scoreA + '%' }" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" :style="{ width: scoreB + '%' }" aria-valuenow="50" aria-valuemin="100" aria-valuemax="0"></div>
    </div>
    <!-- <button @click="buttonA()"><i class="fa fa-plus-circle" type="" ></i></button> -->
    <!-- <button @click="buttonB()">FIGHT B</button> -->

    <div class="col-md-12">
        <i class="fas fa-plus-square buttonA col-md-4" @click="buttonA()"></i>
        <i class="fas fa-plus-square buttonB col-md-4" @click="buttonB()"></i>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'gamepage',
  data () {
    return {
      nickname: '',
      scoreA: 50,
      scoreB: 50,
      statusWiggle: true,
      isShake: 'shake' + 0.5 + 's',
      isInfinite: 'infinite'
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    enterRoom () {
      console.log(this.nickname)
    },
    buttonA () {
      this.scoreA += 1
      this.scoreB -= 1
      console.log('ini dari button A point A:', this.scoreA)
      console.log('ini dari button A point B:', this.scoreB)
    },
    buttonB () {
      this.scoreA -= 1
      this.scoreB += 1
      console.log('ini dari button B point A:', this.scoreA)
      console.log('ini dari button B point B:', this.scoreB)
    }
  }
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
