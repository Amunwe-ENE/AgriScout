<template>
    <div class="container">
        <b-card-group columns>
          <Card  v-for="(crop,index) in crops" :index="index" :crop="crop" :key="index"/>
        </b-card-group>
        <Crop />
        {{crops[0].name}}

    </div>
</template>
<script>
import Crop from '@/components/Crop.vue'
import Card from '@/components/Card.vue'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6],
      cropss: [{ name: 'Maize', id: 1 },
        { name: 'Mahangu', id: 2 },
        { name: 'Sorghum', id: 3 },
        { name: 'Wheat', id: 4 },
        { name: 'Hops', id: 5 },
        { name: 'Barly', id: 6 },
        { name: 'Mili', id: 7 },
        { name: 'Beans', id: 8 }]
    }
  },
  components: {
    Crop,
    Card
  },
  computed: {
    ...mapState(['crops'])
  }
}
</script>
