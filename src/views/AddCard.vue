<template>
  <section id="addCard">
    <Top />
    <h4 id="newCard">NEW CARD</h4>
    <Card :card="card"/>
    <CardForm v-on:cardInfo="addInfo" />
  </section>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";

export default {
  name: "AddCard",
  components: {
    Top,
    Card,
    CardForm,
  },
  props: {
    cardInfo: Object,
  },
  computed: {
    card() {
      return this.$store.state.card
    }
  },
  data() {
    return {
      formInfo: {
        cardNumber: "",
        name: "",
        date: "",
        ccv: "",
        vendor: "",
      }
    }
  },
  methods: {
    addInfo(value) {
      this.formInfo = value;
      this.$emit("cardInfo", this.formInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
#addCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #newCard {
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: rgba(34, 34, 34, 0.6);
  }
}
</style>