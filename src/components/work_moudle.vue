<template>
<div>
    <!-- line -->
    <div class="Line">
        <Line_1 :con1="con1"></Line_1>
    </div>
    <!-- workPlaces -->
    <div class="workPlaces">
        
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
import Line_1 from  "@/components/Line_1.vue"
export default {
    data(){
        return{
            con1:[{act:"最新活动",arr:"#",bg:"url("+require("@/assets/img/common/zuiixn.png")+")"}],
            con2:[{act:"最新客片",arr:"#",bg:"url("+require("@/assets/img/common/kepian.png")+")"}],
            con3:[{act:"最新风格",arr:"#",bg:"url("+require("@/assets/img/common/fenggeng.png")+")"}],
            con4:[{act:"最新资讯",arr:"#",bg:"url("+require("@/assets/img/common/newstit.png")+")"}],
                
            }
    },
    components:{
        Line_1

    }
}
</script>

<style>
 .workPlaces{
     padding: 100px 0;
     background: #000
 }
</style>