<template>
  <div>
    <investments-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import InvestmentsList from '../components/InvestmentsList.vue'

export default {
  name: 'Home',
  components: {
    InvestmentsList
  }
}
</script>
