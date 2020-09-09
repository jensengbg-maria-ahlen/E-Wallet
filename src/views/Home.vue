<template>
  <main id="home">
    <Top />
    <h4>ACTIVE CARD</h4>
    <Card :cardInfo="cardInfo" />
    <CardStack :cardInfo="cardInfo" />
    <button @click="goTo">ADD A NEW CARD</button>
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

<style lang="scss">


</style>