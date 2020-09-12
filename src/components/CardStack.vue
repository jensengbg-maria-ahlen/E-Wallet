<template>
  <section>
    <TheCards v-for="(card, index) in cards" :key="index" :cardData="card" />
  </section>
</template>

<script>
import TheCards from "@/components/Card";

export default {
  name: "CardStack",
  components: {
    TheCards,
  },
  props: {
    cards: Array,
  },
  data() {
    return {
      cardArray: []
    }
  },
  computed: {
    info() {
      return this.cards
    }
  }
};
</script>

<style>
</style>