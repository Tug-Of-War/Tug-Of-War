<template>
  <div>
    <div class="row" v-if="choose_team">
      <div class="col-5">
        <button class="button btn-primary btn-lg animated bounceInLeft" @click="pickSide('blue')">Join Team Blue</button>
      </div>
      <div id="side" class="col-2">
        <h1 class="animated zoomInDown">Choose Your Side</h1>
      </div>
      <div class="col-5">
        <button class="button btn-danger btn-lg animated bounceInRight" @click="pickSide('red')">Join Team Red</button>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-5 animated slideInDown">
        <div class="card" v-for="(memberBlue,index) in teamA" :key="index" style="background-color: rgba(0, 0, 255, 0.7);">
          <img class="card-img-top" src="@/assets/img/photofunky.gif">
          <div class="card-body">
            <h5 class="card-title">{{ truncateName(memberBlue) }}</h5>
          </div>
        </div>
      </div>
      <div id="start" class="col-2">
        <img src="@/assets/img/PleaseWait.gif" v-if="!start_game">
        <img src="@/assets/img/countdown.gif" v-else>
      </div>
      <div class="col-5 animated slideInUp">
        <div class="card" v-for="(memberRed,index) in teamB" :key="index" style="background-color: rgba(255, 0, 0, 0.7);">
          <img class="card-img-top" src="@/assets/img/photofunky.gif">
          <div class="card-body">
            <h5 class="card-title">{{ truncateName(memberRed) }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center" v-if="!choose_team" style="margin-bottom:10%;">
      <button class="button btn-warning btn-lg" v-if="!start_game">Quit Room</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'room',
  data: function () {
    return {
      user: '',
      choose_team: true,
      start_game: false,
      team1: [],
      team2: []
    }
  },
  methods: {
    pickSide: function (side) {
      let getUser = localStorage.getItem('player')
      this.user = getUser
      let getRoom = localStorage.getItem('ruangan')
      if (side === 'blue') {
        this.team1.push(getUser)
        this.choose_team = false
        let newMember = {
          username: getUser,
          side: 'a',
          room: getRoom
        }
        this.$store.dispatch('setTeamA', newMember)
        this.$store.dispatch('setTeamB', newMember)
        this.$store.dispatch('chooseTeam', newMember)
      } else {
        this.team2.push(getUser)
        this.choose_team = false
        let newMember = {
          username: getUser,
          side: 'b',
          room: getRoom
        }
        this.$store.dispatch('setTeamA', newMember)
        this.$store.dispatch('setTeamB', newMember)
        this.$store.dispatch('chooseTeam', newMember)
      }
    },
    truncateName: function (name) {
      if (name.length > 4) {
        name = name.slice(0, 4) + '..'
        return name
      } else {
        return name
      }
    }
  },
  created: function () {
    if (this.team1.length === 5) {
      this.team2.push(this.getUser)
      this.choose_team = false
    } else if (this.team2.length === 5) {
      this.team1.push(this.getUser)
      this.choose_team = false
    }
  },
  watch: {
    team1: function () {
      let _this = this
      let playersTotal = this.team1.length + this.team2.length
      if (playersTotal === 10) {
        this.start_game = true
        setTimeout(function () {
          _this.$router.push('/gamepage')
        }, 5000)
      }
    },
    team2: function () {
      let _this = this
      let playersTotal = this.team2.length + this.team1.length
      if (playersTotal === 10) {
        this.start_game = true
        setTimeout(function () {
          _this.$router.push('/gamepage')
        }, 5000)
      }
    }
  },
  computed: mapState([
    // map this.count to store.state.count
    'teamA',
    'teamB'
  ])
}
</script>

<style scoped>#side {
  height: fit-content;
  width: fit-content;
  margin-top: 10%;
  margin-bottom: 10%;
}

#start {
  height: fit-content;
  width: fit-content;
  margin-top: 30%;
}

#start img {
  width: 100%;
}

.card {
  height: fit-content;
  width: 30%;
  margin: 2%;
}

.card-title {
  font-size: 1.5rem;
}

.col-5 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.col-2 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-2 h1 {
  visibility: unset;
}

@media only screen and (max-width: 820px) {
  .card-title {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 675px) {
  .card-title {
    font-size: 0.81rem;
  }
}

@media only screen and (max-width: 620px) {
  .card-title {
    font-size: 0.8rem;
    width: 2%;
  }
  .col-5 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .col-2 {
    visibility: hidden;
  }
}
</style>
