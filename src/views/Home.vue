<template>
  <main id="home">
    <Top />
    <h4 id="activeCard">ACTIVE CARD</h4>
    <Card :cardData="allCards" @click="showActiveCard" />
    <CardStack :cards="cards" @getTheCard="getTheCard" @click="showActiveCard"/>
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
  data() {
    return {
      cardsArray: [
        {
          cardNumber: "",
          name: "",
          date: "",
          ccv: "",
          vendor: "",
        }
      ]
    }
  },
  computed: {
    allCards() {
      return this.cards[0]
    }
  },
  methods: {
    getTheCard() {
      let cards = localStorage.getItem('newCard')
      return cards
    },
    showActiveCard() {
      let index = this.cardsArray.findIndex(item => item.id === this.cards.id );
      console.log(index)
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

    Card {
      margin-bottom: 1rem;
    }
    
  }
</style>