<template>
  <main id="home">
    <Top />
    <h4 id="activeCard">ACTIVE CARD</h4>
    <Card :cardInfo="cardInfo" />
    <CardStack v-on:cardInfo="cardInfo" />
    <button @click="goTo" id="goToButton">ADD A NEW CARD</button>
  </main>
</template>

<script>
import Top from '@/components/Top';
import Card from '@/components/Card';
import CardStack from '@/components/CardStack';

export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack
  },
  props: {
    cardInfo: Object
  },
  methods: {
    goTo() {
      this.$router.push('/addcard');
    }
  }
}
</script>

<style lang="scss" scoped>
  #home {
    display: flex;
    flex-direction: column;

    #activeCard {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: rgba(34, 34, 34, 0.6);
    }

    #goToButton {
      width: 382px;
      height: 80px;
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 8px;
      font-family: 'PT Mono';
      font-weight: bold;
      font-size: 22px;
      line-height: 25px;
      background: white;
      color: #000000;
    }
  
  }
</style>