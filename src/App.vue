<template>
  <div id="app">
    <router-view 
      :cards="cards" 
      :cardInfo="cardInfo"
      @cardInfo="listenCardInfo" 
      @addCards="addCards"
    />  
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cardInfo: {
        cardNumber: "",
        name: "",
        date: "",
        ccv: "",
        vendor: "",
      },
      cards: []
    }
  },
  methods: {
    listenCardInfo(value) {
      return (this.cardInfo = value), this.addCards();
    },
    addCards() {
      this.cards.push(this.cardInfo);
      localStorage.setItem('cards', JSON.stringify(this.cards));
    }
  },
  mounted() {
    let cards = localStorage.getItem('cards');
    if(cards !== null) {
      this.cards = JSON.parse(cards);
    }
  }
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