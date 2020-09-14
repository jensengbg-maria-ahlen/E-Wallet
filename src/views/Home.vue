<template>
  <main id="home">
    <Top />
    <h4 id="activeCard">ACTIVE CARD</h4>
    <Card 
      :cardData="cardInfo" 
    />
    <CardStack 
      :cards="cards"
      @showCard="showCard" 
    />
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
    cardInfo: Object,
    cards: Array
  },
  methods: {
    showCard(card) {
      let activeCard = (this.cardInfo = card)
      this.$emit('activeCard', activeCard)
      console.log(activeCard)
    }
  }
}
</script>

<style lang="scss" scoped>
  #home {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    #activeCard {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: rgba(34, 34, 34, 0.6);
    }

    #Card {
      margin-bottom: 1rem;
    }
    
  }
</style>