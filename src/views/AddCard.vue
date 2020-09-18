<template>
  <section id="addCard">
    <Top />
    <h4 id="newCard">NEW CARD</h4>
    <Card :card="card"/>
    <CardForm />
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
  data() {
    return {
      cardTemplate: {
        cardNumber: "",
        name: "",
        date: "",
        ccv: "",
        vendor: ""
      }
    }
  },
  computed: {
    card() {
      return this.cardTemplate
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