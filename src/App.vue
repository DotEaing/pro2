<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
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


</style>
