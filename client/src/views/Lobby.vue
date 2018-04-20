<template>
  <div class="container-lobby row">
    <Rooms class="container-rooms col-xl-8 col-lg-7 col-md-6 col-sm-6 col-xs-12" />
    <Players class="container-players offset-xl-1 col-xl-2 offset-lg-1 col-lg-3 offset-md-1 col-md-4 col-sm-4 col-xs-12"/>
    <div class="jumbotron footer-container col-12">
      <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#exampleModalCenter">
      CREATE ROOM
    </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <input type="text" v-model="newRoomName" class="form-control" placeholder="Enter your new room" aria-label="Recipient's new roomname" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click=add_room>Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Players from '@/components/Players.vue'
import Rooms from '@/components/Rooms.vue'

export default {
  name: 'lobby',
  components: {
    Players,
    Rooms
  },
  data () {
    return {
      newRoomName: ''
    }
  },
  methods: {
    add_room () {
      let newRoom = this.newRoomName
      this.$store.dispatch('addRoom', newRoom)
    },
    getData: function () {
      this.$store.dispatch('getAllDatas')
    }
  },
  created () {
    console.log('----')
    this.getData()
  }
}
</script>

<style>

.container-lobby {
  display: flex;
  border: 3px solid red;
  flex-wrap: wrap;
}

.container-players {
  border: 3px solid blue;
  align-self: flex-start;
  flex-basis: auto;
}

.container-rooms {
  border: 3px solid red;
  align-self: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-container {
  align-self: flex-end;
}
</style>
