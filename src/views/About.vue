<template>
  <div class="about">
    <h1>About Us !</h1>
    <p>Agriscout is a web based application available on both mobile and desktop. The application wishes to solve <br></p>
    <WeatherApi/>
  </div>
</template>
<script>
import WeatherApi from '@/components/WeatherApi.vue'

export default {
  components: {
    WeatherApi
  }
}
</script>
