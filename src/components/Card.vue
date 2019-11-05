<template>
    <div >
        <b-card
        title="Crop Name"
         sub-title="Scientific Name"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <Crop :index="index"/>
  </b-card>
    </div>
</template>
<script>
import Crop from './Crop.vue'
export default {
  props: {
    index: Number
  },
  components: {
    Crop
  }
}
</script>
