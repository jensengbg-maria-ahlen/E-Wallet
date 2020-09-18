<template>
  <div id="app">
    <router-view />  
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400&display=swap');

body {
  background: rgb(214, 214, 214);
  
  #app {
    max-width: 500px;
    min-height: 800px;
    margin: 1rem auto;
    font-family: 'PT Mono', monospace;
    font-style: normal;
    font-weight: normal;
    display: flex;
    justify-content: center;
    background: white;
  }
}
</style>