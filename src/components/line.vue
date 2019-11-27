<template>
  <div>
      <div class="line mid" :style="background">
        <div class="line-box">
          <h3>
            <!-- <router-link :to="" >
            </router-link> -->
          </h3>
        </div>
      </div>
       
  </div>
</template>

<script>
export default {
    data(){
        return{
          background:{
            backgroundImage:"url("+require("@/assets/img/common/xpfb.jpg")+")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            }


        }

    },
}
</script>

<style>

</style>