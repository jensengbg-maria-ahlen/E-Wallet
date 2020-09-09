<template>
  <section id="addCard">
    <Top />
    <h4>NEW CARD</h4>
    <Card :cardInfo="cardInfo" />
    <CardForm v-on:cardInfo="addCard" />
    <button @click="addCard">ADD CARD</button>
  </section>
</template>

<script>
import Top from '@/components/Top';
import Card from '@/components/Card';
import CardForm from '@/components/CardForm';

export default {
  name: 'AddCard',
  components: {
    Top,
    Card,
    CardForm
  },
  props: {
    cardInfo: Object
  },
  methods: {
    addCard(value) {
      this.cardInfo = value
    }
  }
}
</script>

<style>

</style>