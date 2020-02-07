<template>
    <div >
        <b-card
        :title="crop.name"
         :sub-title="crop.scientificName"
        :img-src="crop.image"
        :img-alt="crop.image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 square-img"
        >
    <b-card-text class="description" >
      {{crop.shortDescription}}
    </b-card-text>
    <Crop :index="index" :crop="crop"/>
  </b-card>
    </div>
</template>
<script>
import Crop from './Crop.vue'
export default {
  data () {
    return {
      image: require(this.crop.image)
    }
  },
  props: {
    index: Number,
    crop: Object
  },
  components: {
    Crop
  }
}
</script>

<style scoped>
.description {
  height: 30px;
  line-height: 1;
  overflow: hidden;
}
.square-img > img {
   height: 220px;
}
</style>
