<template>
  <main id="home">
    <Top />
    <h4 id="activeCard">ACTIVE CARD</h4>
    <Card :cardData="activeCard" @activeCard="showCard" />
    <CardStack :cards="cards" @getTheCards="getTheCards" />
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
  computed: {
    activeCard() {
      //let active = this.cards.filter(card => card.key == this.$route.params.key)[0]
      let active = this.showCard()
      return active
    }
  },
  methods: {
    getTheCards() {
      let cards = localStorage.getItem('cards')
      return cards
    },
    showCard(value) {
      return console.log('HEJ', (this.cardData = value))
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