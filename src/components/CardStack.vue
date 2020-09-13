<template>
  <section id="cardStack">
    <Card 
     v-for="(card, index) in cards" 
     :key="index" 
     :cardData="card" 
     @click.native="showActiveCard(index)" 
     :style="{zindex: 10, marginTop: '-10rem'}"
    />
    <button @click="goTo" id="goToButton">ADD A NEW CARD</button>
  </section>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "CardStack",
  components: {
    Card,
  },
  props: {
    cards: Array,
  },
  methods: {
    goTo() {
      this.$router.push("/addcard");
    },
    showActiveCard(index) {
      this.$emit('activeCard', index)
    }
  }
};
</script>

<style lang="scss">
#cardStack {
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  #goToButton {
    margin: 2rem 0 1rem 0;
    width: 382px;
    height: 80px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: "PT Mono";
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    background: white;
    color: #000000;
  }
}
</style>