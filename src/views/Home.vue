<template>
  <div class="container">
    <div class="home-flex">
      <div class="flex-2"><b-table striped hover class="opa" :items="items2"> </b-table></div>
      <div><router-link to="/croplist"><b-button variant="outline-primary">Crops To grow</b-button></router-link></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      items: [
        { _: 'Temp', Su: '38C', M: '40C', Tu: '23C', W: '28C', T: '30C', F: '30C', S: '40C' },
        { _: 'Rain%', Su: '8%', M: '35%', Tu: '23%', W: '80%', T: '65%', F: '90%', S: '70%' },
        { _: 'Humidity', Su: '38C', M: '40C', Tu: '23C', W: '28C', T: '30C', F: '30C', S: '40C' }
      ],
      items2: [
        { _: 'Su', Temp: '38C', Rain: '8%', Humidity: ' 4%' },
        { _: 'M', Temp: '38C', Rain: '8%', Humidity: ' 4%' },
        { _: 'Tu', Temp: '38C', Rain: '8%', Humidity: ' 4%' },
        { _: 'W', Temp: '38C', Rain: '8%', Humidity: ' 4%' },
        { _: 'T', Temp: '38C', Rain: '8%', Humidity: ' 4%' },
        { _: 'F', Temp: '38C', Rain: '8%', Humidity: ' 4%' },
        { _: 'S', Temp: '38C', Rain: '8%', Humidity: ' 4%' }
      ]
    }
  },
  components: {}
}
</script>

<style scoped>
  .container{
    margin: 0px 16px;
  }
  .opa{
    background-color: white;
    /* color: white; */
    opacity: 0.7;
  }
  .home-flex{
    display: flex;
     display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .flex-2{
    flex: 1;
  }
</style>
