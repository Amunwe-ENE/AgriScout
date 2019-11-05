<template>
  <div id="app">
    <div id="nav">
      <Header class="blur-back"/>
    </div>
    <transition name="moveInUp" > <router-view/></transition>
  </div>
</template>
<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   background: url('assets/image/background-3.jpg') no-repeat center center fixed;
   -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.moveInUp-enter-active{  opacity: 0;  transition: opacity 1s ease-in;}

.moveInUp-enter-active{  animation: fadeIn 3s ease-in;}@keyframes fadeIn{  0%{    opacity: 0;  }  50%{    opacity: 0.5;  }  100%{    opacity: 1;  }}

.moveInUp-leave-active{  animation: moveInUp .35s ease-in;}@keyframes moveInUp{ 0%{  transform: translateY(0); }  100%{  transform: translateY(-400px); }}
.blur-back{
  background-color: white;
  opacity: 0.7;
}
</style>
