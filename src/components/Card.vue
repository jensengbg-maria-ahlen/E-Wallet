<template>
  <article id="card">
      <section id="cardTop">
        <img :src="'@/assets/chip-dark.svg'" alt="chip">
        <img :src="'@/assets/vendor-bitcoin.svg'" alt="vendor">
      </section>
      <section id="cardMiddle">
          <h3>{{ cardInfo.cardNumber }}</h3>
      </section>
      <section id="cardBottom">
        <section class="name">
            <h5>CARDHOLDER NAME</h5>
            <h4>{{ cardInfo.name }}</h4>
        </section>
        <section class="date">
            <h5>VALID THRU</h5>
            <h4>{{ cardInfo.date }}</h4>
        </section>
      </section>
  </article>
</template>

<script>

export default {
    name: 'Card',
    props: {
        cardInfo: Object
    }
}
</script>

<style lang="scss" scoped>

#card {
    width: 380px;
    height: 240px;
    background: #D0D0D0;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #cardTop {
        display: flex;
        justify-content: space-around;
    }

    #cardBottom {
       display: flex;
       flex-direction: row;
       justify-content: space-between; 
    }
}

</style>