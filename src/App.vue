<template>
  <div id="app">
    <div class="ttt">

    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/mainNav.vue"
import Footer from "@/components/footer.vue"
export default {
  
  components:{
    Nav,
    Footer
  }
}
</script>
<style>
.ttt{
  background: #001a26;
}



</style>
