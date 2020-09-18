<template>
  <section id="cardForm">
    <section class="cardNumber">
      <span>CARD NUMBER</span>
      <input
        type="text"
        v-model.number="cardInfo.cardNumber"
        placeholder="XXXX XXXX XXXX XXXX"
        maxlength="16"
        minlength="16"
        onkeypress='return event.charCode >= 48 && event.charCode <= 57'
        v-on:keyup="showInfo"
      />
    </section>
    <section class="cardName">
      <span>CARDHOLDER NAME</span>
      <input
        type="text"
        v-model="cardInfo.name"
        placeholder="FIRSTNAME LASTNAME"
        v-on:keyup="showInfo"
      />
    </section>
    <section class="dateAndCcv">
      <section class="cardDate">
        <span>VALID THRU</span>
        <input
          type="text"
          v-model="cardInfo.date"
          placeholder="MM/YY"
          maxlength="5"
          minlength="5"
          v-on:keyup="showInfo"
        />
      </section>
      <section class="cardCcv">
        <span>CCV</span>
        <input 
          type="text" 
          v-model.number="cardInfo.ccv" 
          placeholder="XXX"
          maxlength="3"
          onkeypress='return event.charCode >= 48 && event.charCode <= 57'
          />
      </section>
    </section>
    <section class="cardVendor">
      <span>VENDOR</span>
      <select v-model="cardInfo.vendor" v-on:keyup="showInfo">
        <option value="bitcoin">BITCOIN INC</option>
        <option value="ninja">NINJA BANK</option>
        <option value="blockchain">BLOCK CHAIN INC</option>
        <option value="evil">EVIL CORP</option>
      </select>
    </section>
    
    <button @click="goTo" id="addButton">ADD CARD</button>
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
      }
    }
  },
  methods: {
    addValue() {
      this.$store.commit('addCard', this.cardInfo)
    },
    goTo() {
      this.addValue();
      this.$router.push("/");
    },
    showInfo() {

    }
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

  #addButton {
    margin-top: 2rem;
    width: 382px;
    height: 72px;
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