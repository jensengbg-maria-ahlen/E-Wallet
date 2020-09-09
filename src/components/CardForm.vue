<template>
  <section class="cardForm" >
      <section>
          <span>CARD NUMBER</span>
          <input type="text" v-model="cardInfo.cardNumber" v-on:keyup="addValue" placeholder="XXXX XXXX XXXX XXXX">
      </section>
      <section>
          <span>CARDHOLDER NAME</span>
          <input type="text" v-model="cardInfo.name" v-on:keyup="addValue" placeholder="FIRSTNAME LASTNAME">
      </section>
      <section>
          <span>VALID THRU</span>
          <input type="text" v-model="cardInfo.date" v-on:keyup="addValue" placeholder="MM/YY">
      </section>
      <section>
          <span>CCV</span>
          <input type="text" v-model="cardInfo.ccv" v-on:keyup="addValue">
      </section>
      <section>
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
    name: 'CardForm',
    data() {
        return {
            cardInfo: {
                cardNumber: '',
                name: '',
                date: '',
                ccv: '',
                vendor: ''
            }
        }
    },
    methods: {
        addValue() {
            this.$emit('cardInfo', this.cardInfo)
        }
    }
}
</script>

<style>

</style>