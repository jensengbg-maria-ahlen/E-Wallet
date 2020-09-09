<template>
  <div id="app">
    <router-view :cardInfo="cardInfo"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cardInfo: {}
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');

body {

  #app {
    max-width: 500px;
    margin: 1rem auto;
    font-family: 'PT Mono', monospace;
    font-style: normal;
    font-weight: normal;
    display: flex;
    justify-content: center;
  }
}
</style>