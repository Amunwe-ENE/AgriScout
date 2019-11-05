<template>
<div>
  <b-nav tabs fill id="blur-back">
    <b-nav-item ><b><router-link class="fill-router" to="/"><span class="green-name">Agri</span>Scout</router-link> </b></b-nav-item>
    <b-nav-item ><b><router-link to="/nextseason">Seasons</router-link> </b></b-nav-item>
    <b-nav-item ><b><router-link to="/about">About</router-link> </b></b-nav-item>
  </b-nav>
</div>
</template>
<style scoped>
.fill-router{
  width: 100%;
}
.green-name{
  color: green;
  font-size: 1.2em;
}
.blur-back{
  background-color: rgba(white, white, white, 1);
}
</style>
