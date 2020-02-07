<template><div>
    <div>
        <b-button v-b-toggle="'collapse-'+index" variant="primary">Requirements</b-button>
  <b-collapse  :id="'collapse-'+index" class="mt-2">
    <b-card>
      <p class="card-text"><span class="badge badge-primary">Sowing Time:</span> {{crop.sowingTime}}</p>
      <p class="card-text"><span class="badge badge-warning">Annual Rainfall:</span>{{crop.annualRainfall.min}}</p>
      <p class="card-text"><span class="badge badge-secondary">Harvest:</span>{{crop.harvest}}</p>
      <p class="card-text"><span class="badge badge-success">Sowing Depth:</span>{{crop.sowingDepth}}</p>
      <p class="card-text"><span class="badge badge-danger">Soil pH:</span>{{crop.soilPH}}</p>
      <p class="card-text"><span class="badge badge-dark">Soil Preferences:</span>{{crop.soilPreferences}}</p>
      <!-- <b-button v-b-toggle="'collapse-'+index+'-inner'" size="sm">Tips on Maize</b-button>
      <b-collapse :id="'collapse-'+index+'-inner'"   class="mt-2">
        <b-card>Im the tip!</b-card>
      </b-collapse> -->
    </b-card>
  </b-collapse>
    </div></div>
</template>
<script>
export default {
  props: {
    index: Number,
    crop: Object
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
