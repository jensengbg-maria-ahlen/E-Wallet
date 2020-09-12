<template>
  <section id="cardStack">
    <Card v-for="(card, index) in cards" :key="index" :cardData="card" />
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
  data() {
    return {
      cardObj: {
        cardNumber: "",
        name: "",
        date: "",
        ccv: "",
        vendor: "",
      }
    }
  },
  computed: {
    info() {
      return this.card;
    },
  },
  methods: {
    goTo() {
      this.$router.push("/addcard");
    },
  }
};
</script>

<style lang="scss">
#cardStack {

  #goToButton {
    margin-top: 2rem;
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