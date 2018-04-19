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
            <div class="card" v-for="(memberBlue,index) in team1" :key="index" style="background-color: rgba(0, 0, 255, 0.7);">
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
            <div class="card" v-for="(memberRed,index) in team2" :key="index" style="background-color: rgba(255, 0, 0, 0.7);">
                <img class="card-img-top" src="@/assets/img/photofunky.gif">
                <div class="card-body">
                    <h5 class="card-title">{{ truncateName(memberRed) }}</h5>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center" v-if="!choose_team" style="margin-bottom:10%;">
        <button class="button btn-warning btn-lg">Quit Room</button>
    </div>
  </div>
  
</template>

<script>
export default {
    name: 'room',
    data: function() {
        return{
            user: 'Joko',
            choose_team: true,
            start_game: false,
            team1:['Rio','Roy','Rex','Ronasdasdasdasdasdasdasda','Raid'],
            team2:['Jax','June','Jade','Joy'],
        }
    },

    methods: {
        pickSide: function(side) {

            if(side === 'blue'){
                this.team1.push(this.user)
                this.choose_team = false;
            }else {
                this.team2.push(this.user)
                this.choose_team = false;
            }
        },

         truncateName: function(name){
            if(name.length > 6){
                name = name.slice(0,6) + '...'
                return name
            }else{
                return name
            }
        }
        
    },

    created: function() {
        if(this.team1.length === 5) {
            this.team2.push(this.user)
            this.choose_team = false;
        }else if(this.team2.length === 5) {
            this.team1.push(this.user)
            this.choose_team = false;
        }
    },

    watch:{
        team1: function(team1){
            let _this = this;
            
            let players_total = team1.length + this.team2.length;

            if(players_total === 10){
                this.start_game = true;

                setTimeout(function(){ 
                    _this.$router.push('/')
                 }, 5000);
            }
            
        },

        team2: function(team2){
            let _this = this;
            
            let players_total = team2.length + this.team1.length;

            if(players_total === 10){
                this.start_game = true;

                setTimeout(function(){ 
                    _this.$router.push('/')
                 }, 5000);
            }            
        }
    },

    computed:{
       
    }
}
</script>

<style scoped>   
    #side{
        height: fit-content;
        width: fit-content;
        margin-top: 10%;        
        margin-bottom: 10%;
    }

    #start{
        height: fit-content;
        width: fit-content;
        margin-top: 30%;
    }

    #start img{
        width: 100%;        
    }

    .card{
        height: fit-content;
        width: 30%;
        margin: 2%;        
    }

    .card-title{
        font-size: 1.5rem;
    }

    .col-5{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;        
    }

    .col-2{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .col-2 h1{
        visibility: unset;
    }

    
    @media only screen and (max-width: 820px) {
        .card-title{
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 675px) {
        .card-title{
            font-size: 0.81rem;
        }
    }

    @media only screen and (max-width: 620px) {
        .card-title{
            font-size: 0.8rem;
            width: 2%;
        }

        .col-5{
            display: flex;
            flex-direction: column;
            align-items: center;        
        }

        .col-2{
            visibility: hidden;
        }
    } 
</style>
