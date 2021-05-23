<template>
  <div class="">
    <h1 class="title">Lista Investimentos</h1>
    <div class="box">
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="Corretora">Corretora</abbr></th>
            <th><abbr title="Codigo">Codigo</abbr></th>
            <th><abbr title="Valor medio">Valor medio</abbr></th>
            <th><abbr title="Quantidade">Qtde</abbr></th>
            <th><abbr title="Preco atual">Valor Atual</abbr></th>
            <th><abbr title="Valor total">Valor total</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvestmentsList",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
