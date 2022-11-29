<template>
  <img alt="Vue logo" src="./assets/light-saber.png" height="100">
  <PeopleSW />
</template>

<script>
import PeopleSW from './components/PeopleSW.vue';

export default {
  name: 'App',
  components: {
    PeopleSW
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
