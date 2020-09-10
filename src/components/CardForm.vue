<template>
  <section id="cardForm">
    <section class="cardNumber">
      <span>CARD NUMBER</span>
      <input
        type="text"
        v-model.number="cardInfo.cardNumber"
        v-on:keyup="addValue"
        placeholder="XXXX XXXX XXXX XXXX"
      />
    </section>
    <section class="cardName">
      <span>CARDHOLDER NAME</span>
      <input
        type="text"
        v-model="cardInfo.name"
        v-on:keyup="addValue"
        placeholder="FIRSTNAME LASTNAME"
      />
    </section>
    <section class="dateAndCcv">
      <section class="cardDate">
        <span>VALID THRU</span>
        <input
          type="text"
          v-model="cardInfo.date"
          v-on:keyup="addValue"
          placeholder="MM/YY"
        />
      </section>
      <section class="cardCcv">
        <span>CCV</span>
        <input 
          type="text" 
          v-model.number="cardInfo.ccv" 
          v-on:keyup="addValue" 
          />
      </section>
    </section>
    <section class="cardVendor">
      <span>VENDOR</span>
      <select v-model="cardInfo.vendor" v-on:keyup="addValue">
        <option value="bitcoin">BITCOIN INC</option>
        <option value="ninja">NINJA BANK</option>
        <option value="blockchain">BLOCK CHAIN INC</option>
        <option value="evil">EVIL CORP</option>
      </select>
    </section>
  </section>
</template>

<script>
export default {
  name: "CardForm",
  data() {
    return {
      cardInfo: {
        cardNumber: "",
        name: "",
        date: "",
        ccv: "",
        vendor: "",
      },
    }
  },
  methods: {
    addValue() {
      this.$emit("cardInfo", this.cardInfo);
    },
  }
};
</script>

<style lang="scss" scoped>
#cardForm {
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  span {
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 13px;
    color: rgba(0, 0, 0, 0.8);
  }

  .cardNumber {
    input {
      width: 382px;
      height: 56px;
      border: 1px solid rgba(0, 0, 0, 0.8);
      box-sizing: border-box;
      border-radius: 8px;
    }
  }

  .cardName {
    input {
      width: 382px;
      height: 56px;
      border: 1px solid rgba(0, 0, 0, 0.8);
      box-sizing: border-box;
      border-radius: 8px;
    }
  }

  .dateAndCcv {
    display: flex;
    flex-direction: row;

    .cardDate {
      input {
        width: 175px;
        height: 56px;
        border: 1px solid rgba(0, 0, 0, 0.8);
        box-sizing: border-box;
        border-radius: 8px;
      }
    }

    .cardCcv {
      input {
        width: 175px;
        height: 56px;
        border: 1px solid rgba(0, 0, 0, 0.8);
        box-sizing: border-box;
        border-radius: 8px;
      }
    }
  }
  .cardVendor {
    select {
      width: 382px;
      height: 56px;
      border: 1px solid rgba(0, 0, 0, 0.8);
      box-sizing: border-box;
      border-radius: 8px;
    }
  }
}
</style>