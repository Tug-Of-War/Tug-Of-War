<template>
  <div>
    <div class="card border-success mb-3" style="max-width: 18rem; margin: 20px;" v-for="(room, index) in allRooms" :key="index" :class="{borderdanger: countMember(room.member)}">
      <div class="card-header bg-transparent border-success" :class="{borderdanger: countMember(room.member)}">{{room.master}}</div>
      <div class="card-body text-success" :class="{textdanger: countMember(room.member)}">
        <h5 class="card-title">{{room.names}}</h5>
        <h6><span class="card-text">{{room.member}}</span> / 10</h6>
      </div>
      <div class="card-footer bg-transparent border-success" :class="{borderdanger: countMember(room.member)}">
        <button type="button" class="btn btn-success" @click="join_grup(room)" v-if="room.member < 10">JOIN</button>
        <button type="button" class="btn btn-danger disabled" v-else="">FULL</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'rooms',
  data () {
    return {
      isFull: false
    }
  },
  methods: {
    join_grup (group) {
      console.log(group, 'nih liat')
      localStorage.setItem('ruangan', group.names)
      this.$router.push('/room')
    },
    countMember (member) {
      if (member < 10 && member > 0) {
        return false
      } else {
        return true
      }
    }
  },
  computed: mapState([
    // map this.count to store.state.count
    'allRooms',
    'teamA',
    'teamB'
  ]),
  watch: {
    isFull () {
      console.log(this)
    }
  }
}
</script>

<style>

.bordersuccess {
  border-color: #28a745!important;
}

.borderdanger {
  border-color: #dc3545!important;
}

.textdanger {
  color: #dc3545!important;
}
</style>
