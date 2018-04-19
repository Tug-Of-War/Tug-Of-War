<template>
  <div class="gamepage">
    <!-- <img src="../assets/logo.png"> -->
    <div class="col-md-12">
        <h1 class="heading">TUG OF WAR</h1>
    </div>
    <div class="image-tug col-md-12">
        <img src="../assets/image/tow1.gif" />
    </div>
    <div class="progress-tug progress col-md-8 offset-md-2">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="{ width: scoreA + '%' }" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" :style="{ width: scoreB + '%' }" aria-valuenow="50" aria-valuemin="100" aria-valuemax="0"></div>
    </div>
    <button @click="buttonA()"><i class="fa fa-plus-circle" type="" ></i></button>
    <button @click="buttonB()">FIGHT B</button>

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
      scoreB: 50
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

.progress-tug {
    height:30px
}

</style>
