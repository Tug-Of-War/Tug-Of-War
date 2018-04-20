<template>
  <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">Lobby</div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item" v-for="(user, index) in allPlayers" :key="index">{{user.username}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'player',
  computed: mapState([
    // map this.count to store.state.count
    'allPlayers'
  ])
}
</script>

<style>

</style>
