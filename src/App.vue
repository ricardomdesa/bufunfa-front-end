<template>
  <div id="nav">
    <hero />
  </div>
  <router-view/>
</template>
<script>
import Hero from './components/shared/Hero.vue'
export default {
  components:{
    Hero,
  }
}
</script>


<style>
body {
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
