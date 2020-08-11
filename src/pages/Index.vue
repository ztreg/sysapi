<template>
  <q-page class="q-pa-md">
      <q-table
      title="JAPK"
      :data="this.products"
      row-key="article_id"
      :rows-per-page-options="[0, 20]"
      :columns="columns"
      class="tbl"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      products: [],
      columns: [
        {
          name: 'doesntmatter', required: true, label: 'Namn', align: 'left', field: 'name', format: val => `${val}`, sortable: true
        },
        { name: 'alcohol', align: 'center', label: 'Alkohol %', field: 'alcohol', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'price', label: 'Price', field: 'Pris', sortable: true },
        { name: 'volume_in_milliliter', label: 'ml', field: 'volume_in_milliliter' },
        { name: 'product_group', label: 'Typ', field: 'product_group', sortable: true },
        { name: 'origin_country', label: 'Land', field: 'origin_country' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ]
    }
  },
  async mounted () {
    await fetch('https://bolaget.io/v1/products?limit=100')
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

<style lang="scss" scoped>
.tbl {
  max-height: 800px;
  overflow: auto;
}
</style>
