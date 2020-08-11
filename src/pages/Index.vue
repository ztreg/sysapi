<template>
  <q-page class="row">
      <q-table
      :data="this.products"
      row-key="name"
      class="col-12"
      rows-per-page-label = "10"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      products: []
    }
  },
  async mounted () {
    await fetch('https://bolaget.io/v1/products')
      .then(response => response.json())
      .then((response) => {
        this.products = response
        console.log(this.products)
      })
      .catch((error) => {
        console.error('There was a error fetching:', error)
      })
  }
}
</script>
