<template>
  <main id="home">
    <Top />
    <h4>ACTIVE CARD</h4>
    <Card />
    <CardStack />
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
  methods: {
    goTo() {
      this.$router.push('/addcard');
    }
  }
}
</script>

<style lang="scss">


</style>