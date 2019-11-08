<template>
    <div>

 <input id="city" v-bind="name"/>
  <button id="getWeatherForcast">GET CURRENT WEATHER</button>
  <div class="ShowWeatherForcast"></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: ''
    }
  }
}
</script>
