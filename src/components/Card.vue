<template>
    <div >
        <b-card
        :title="crop.name"
         :sub-title="crop.scientificName"
        src="C:/Users/Fredrika/Desktop/Vue/climate-app/src/assets/image/crops/mahangu.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
    <b-card-text>
      {{crop.shortDescription}}
    </b-card-text>
      <img src="" alt="">
    <Crop :index="index"/>
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
