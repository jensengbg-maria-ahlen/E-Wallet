<template>
  <section id="addCard">
    <Top />
    <h4 id="newCard">NEW CARD</h4>
    <Card :cardInfo="formInfo" />
    <CardForm v-on:cardInfo="addInfo" />
    <button @click="goTo" id="addButton">ADD CARD</button>
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
    cardInfo: Object
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
    },
    goTo() {
      this.$router.push("/");
      localStorage.setItem('card', JSON.stringify(this.formInfo));
    },
  },
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

  #addButton {
    width: 382px;
    height: 72px;
    left: 16px;
    top: 808px;
    background: #000000;
    border-radius: 8px;
    font-family: "PT Mono";
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    color: #ffffff;
  }
}
</style>