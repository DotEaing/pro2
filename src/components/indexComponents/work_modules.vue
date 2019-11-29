<template>
<div>
    <!-- line -->
    <div class="Line">
        <Line_1 :con1="con1"></Line_1>
    </div>
    <!-- workPlaces -->
    <div class="workPlaces">
        <sm_carousel></sm_carousel>
    </div>
    <!-- line -->
    <div class="Line">
        <Line_1 :con1="con2"></Line_1>
    </div>
    <!-- workPlaces -->
    <div class="workPlaces">

    </div>
    <!-- line -->
    <div class="Line">
        <Line_1 :con1="con3"></Line_1>
    </div>
    <!-- workPlaces -->
    <div class="workPlaces">

    </div>
    <!-- line -->
    <div class="Line">
        <Line_1 :con1="con4"></Line_1>
    </div>
    <!-- workPlaces -->
    <div class="workPlaces">
        
    </div>
</div>
    
</template>

<script>
import Line_1 from  "@/components/indexComponents/Line_1.vue"
import sm_carousel from "@/components/indexComponents/sm_carousel.vue"
import {mapState} from "vuex"
export default {
    data(){
        return{
          
            }
    },
    
    computed:{
        ...mapState({
        con1:state=>state.work_modules.con1,
        con2:state=>state.work_modules.con2,
        con3:state=>state.work_modules.con3,
        con4:state=>state.work_modules.con4
        })
    },

    components:{
        Line_1,
        sm_carousel

    }
}
</script>

<style  scoped>
 .workPlaces{
     padding: 100px 0;
     background: #000
 }
</style>