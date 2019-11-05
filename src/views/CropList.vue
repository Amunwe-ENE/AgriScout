<template>
    <div class="container">
        <b-card-group columns>
          <Card  v-for="(item, index) in items" :index="index" :key="index"/>
        </b-card-group>
        <Crop />

    </div>
</template>
<script>
import Crop from '@/components/Crop.vue'
import Card from '@/components/Card.vue'
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6]
    }
  },
  components: {
    Crop,
    Card
  }
}
</script>
