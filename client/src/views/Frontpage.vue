<template>
  <div class="frontpage">
    <!-- <img src="../assets/logo.png"> -->
    <div id="textInputContainer" style="display: block;">
        <h1 class="heading">Tug Of War</h1>
        <form>
            <p>This is the tale of...</p>
            <input v-model="nickname" id="textInput" style="width: 248.64px; height: 32px; font-size: 28.8px; padding-left: 5px; padding-right: 5px;" @keyup.enter="enterRoom()"/>
            <p>(press 'enter' to to enter room)</p>
            <!-- <button class="textSubmit" @click="enterRoom()">ENTER</button> -->
        </form>
        <marquee direction="down" width="250" height="200" behavior="alternate">
            <marquee behavior="alternate">
                MAY THE FORCE BE WITH YOU<span style="color:dodgerblue;">:)</span>
            </marquee>
        </marquee>
        <!-- <marquee height="30" direction="right">MAY THE FORCE BE WITH YOU<span style="color:dodgerblue;">:)</span></marquee> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'frontpage',
  data () {
      return {
          nickname: ''
      }
  },
  components: {
    HelloWorld
  },
  methods: {
      enterRoom () {
          console.log(this.nickname)
      }
  }
}
</script>

<style scoped>

.frontpage {
    /* background-image: url('../assets/image/tow1.gif'); */
    background-image: url('../assets/image/tow-dog.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    color:cornsilk;
    border: 1px solid black;
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    justify-content: center;
    height: 60rem;
}

.heading {
    font-size: 45px;
}

#textInputContainer {
    /* border: 1px solid red; */
    align-self: center;
    margin-bottom: 200px;
}

</style>
