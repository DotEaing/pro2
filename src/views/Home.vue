<template>
  <div>
    <carousel_1></carousel_1>
    <work_modules></work_modules>
    <cennuo></cennuo>
  </div>
</template>

<script>
import carousel_1 from  "@/components/indexComponents/top_carousel.vue"
import work_modules from "@/components/indexComponents/work_modules.vue"
import cennuo from "../components/indexComponents/cennuo.vue"

export default {
  data(){
    return{
      
     
    }
  },

components:{
carousel_1,
work_modules,
cennuo

}
}
</script>

<style scoped>
.cennuo{
/* margin-top: 100px; */
    height: 343px;
}
</style>