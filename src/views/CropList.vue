<template>
    <div class="container">
        <b-card-group columns>
          <Card  v-for="(item, index) in items" :index="index" :crop="crops[index]" :key="index"/>
        </b-card-group>
        <Crop />

    </div>
</template>
<script>
import Crop from '@/components/Crop.vue'
import Card from '@/components/Card.vue'
import { mapState } from 'Vuex'
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6],
      crops: [{ name: 'Maize', id: 1 },
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
