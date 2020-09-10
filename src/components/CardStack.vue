<template>
  <section>
      <TheCards 
      v-for="(card, index) in cards"
      v-bind:key="index"
      v-bind:cardInfo="card" />
  </section>
</template>

<script>
import TheCards from '@/components/Card';

export default {
    name: 'CardStack',
    components: {
      TheCards
    },
    props: {
    cardInfo: Object,
    },
    data() {
      return {
        cards: []
      }
    }
}
</script>

<style>

</style>