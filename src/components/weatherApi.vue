<template>
    <div>

 <input id="city" v-model="name"/>
  <button id="getWeatherForcast" @click="getWeather">GET CURRENT WEATHER</button>
  <div class="ShowWeatherForcast" >{{name}}: {{weather}}</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: 'Windhoek',
      weather: {},
      promiseObj: {}
    }
  },
  methods: {
    getWeather () {
      const url = 'https://api.openweathermap.org/data/weather?q=' + this.name + '&APPID=c203c9e9dfbc5a85bf4a4520cbb807bb'
      const weather = fetch(url)
      weather
        .then((response) => {
          return response.json()
        })
        .then(myjson => {
          this.weather = myjson
          console.log(myjson)
        }).catch(error => {
          this.weather = error
        })
    }
  }
}
</script>
