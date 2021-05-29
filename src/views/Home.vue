<template>
  <div>
    <investments-list v-if="getCurrentTab === 'investimentos'"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src
import InvestmentsList from '../components/InvestmentsList.vue'

export default {
  name: 'Home',
  computed:{
    ...mapGetters(['getCurrentTab'])
  },
  components: {
    InvestmentsList
  }
}
</script>
