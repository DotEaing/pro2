<template>
  <div>
    <div class="clientPages">
      <div class="mid "> 
            <div class="activeity">
                <img src="@/assets/img/common/sonPages/kp_gg.png"  width="709" height="84">
            </div>
            <div class="workplase mid cl">
            <!-- 修改传入子组件的对象就可以 -->
                <card :con="client"></card> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex"
import card from "@/components/indexComponents/card.vue"
export default {
data(){
  return{

  }
},
 computed:{...mapState({
          client:state=>state.card.client
          })},

components:{
        card,
    }
}
</script>

<style scoped>
.clientPages{
  background: #001a26;
}
.clientPages .activeity{
  text-align: center;
  padding: 100px 0;
}
.clientPages .workplase{
  padding-top: 30px;
}

.card em{
	background:#001a26 !important;
}


</style>