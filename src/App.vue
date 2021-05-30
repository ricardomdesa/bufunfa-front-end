<template>
  <div id="nav">
    <hero />
  </div>
  <router-view/>

  <Footer />
  
  

</template>
<script>
import Hero from './components/shared/Hero.vue'
import Footer from './components/shared/Footer.vue'
export default {
  components:{
    Hero,
    Footer,
  }
}
</script>


<style>
body {
  height: 100vh;
  background-color: #f5f5f5;
}
</style>

