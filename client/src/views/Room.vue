<template>
  <div>
    <div class="row" v-if="choose_team">
        <div class="col-5">
            <button class="button btn-primary btn-lg" @click="pickSide('blue')">Join Team Blue</button>
        </div>
        <div id="start" class="col-2">
            
        </div>
        <div class="col-5">
            <button class="button btn-danger btn-lg" @click="pickSide('red')">Join Team Red</button>
        </div>
    </div>  
    <div class="row" v-else>
        <div class="col-5">            
            <div class="card" v-for="(memberBlue,index) in team1" :key="index">
                <img class="card-img-top" src="@/assets/photofunky.gif">
                <div class="card-body">
                    <h5 class="card-title">{{ memberBlue }}</h5>
                </div>
            </div>
        </div>
        <div id="start" class="col-2">
            <img src="@/assets/PleaseWait.gif">
        </div>
        <div class="col-5">            
            <div class="card" v-for="(memberRed,index) in team2" :key="index">
                <img class="card-img-top" src="@/assets/photofunky.gif">
                <div class="card-body">
                    <h5 class="card-title">{{ memberRed }}</h5>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center" v-if="!choose_team" style="margin-bottom:10%;">
        <button class="button btn-warning btn-lg">Quit Room ?</button>
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
            team1:['Rio','Roy','Rex','Ronasdasdasdasdasdasdasda'],
            team2:['Jax','June','Jade','Joy'],
        }
    },
    methods: {
        pickSide(side) {
            if(side === 'blue'){
                this.team1.push(this.user)
                this.choose_team = false;
            }else {
                this.team2.push(this.user)
                this.choose_team = false;
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
    }
}
</script>

<style scoped>   

    #start{
        height: fit-content;
        width: fit-content;
        margin-top: 20%;
    }

    #start img{
        width: 100%;        
    }

    .card{
        height: fit-content;
        width: 30%;
        margin: 2%;
        background-color: rgba(255, 255, 255, 0.411);
    }

    .card-title{
        font-size: 1rem;
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
</style>
