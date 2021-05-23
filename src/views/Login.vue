<template>
  <div class="box">
    <h1 class="title">Login</h1>
    <LoginForm/>
  </div>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
    name: "App",
    components: {
        LoginForm,
    },
    setup() {
        
    },
}
</script>