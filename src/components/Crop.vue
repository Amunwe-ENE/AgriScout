<template><div>
    <div>
        <b-button v-b-toggle="'collapse-'+index" variant="primary">Requirements</b-button>
  <b-collapse  :id="'collapse-'+index" class="mt-2">
    <b-card>
      <p class="card-text">Some crops tip here</p>
      <b-button v-b-toggle="'collapse-'+index+'-inner'" size="sm">Tips on Maize</b-button>
      <b-collapse :id="'collapse-'+index+'-inner'"   class="mt-2">
        <b-card>Im the tip!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
    </div></div>
</template>
<script>
export default {
  props: {
    index: Number
  },
  data () {
    return {
      Crops: [ { name: 'Maize', id: 1 },
        { name: 'Mahangu', id: 2 },
        { name: 'Sorghum', id: 3 },
        { name: 'Wheat', id: 4 },
        { name: 'Hops', id: 5 },
        { name: 'Barly', id: 6 },
        { name: 'Mili', id: 7 },
        { name: 'Beans', id: 8 }
      ]
    }
  }
}
</script>
