<template>
  <article id="card" :class="vendorOfChoice">
    <section id="cardTop">
      <article class="chipImg">
        <img v-if="infoCard.vendor == 'bitcoin'" src="@/assets/chip-dark.svg" alt="chip" />
        <img v-if="infoCard.vendor == 'ninja'" src="@/assets/chip-light.svg" alt="chip" />
        <img v-if="infoCard.vendor == 'blockchain'" src="@/assets/chip-light.svg" alt="chip" />
        <img v-if="infoCard.vendor == 'evil'" src="@/assets/chip-light.svg" alt="chip" />
        <img v-if="infoCard.vendor == ''" src="@/assets/chip-dark.svg" alt="chip" />
      </article>

      <article class="vendorImg" >
        <img v-if="infoCard.vendor == 'bitcoin'" src="@/assets/vendor-bitcoin.svg" alt="vendor" />
        <img v-if="infoCard.vendor == 'ninja'" src="@/assets/vendor-ninja.svg" alt="vendor" />
        <img v-if="infoCard.vendor == 'blockchain'" src="@/assets/vendor-blockchain.svg" alt="vendor" />
        <img v-if="infoCard.vendor == 'evil'" src="@/assets/vendor-evil.svg" alt="vendor" />
        <img v-if="infoCard.vendor == ''" src="@/assets/vendor-bitcoin.svg" alt="vendor" />
      </article>
    </section>

    <section id="cardMiddle">
      <h3>{{ infoCard.cardNumber }}</h3>
    </section>

    <section id="cardBottom">
      <section class="name">
        <h5>CARDHOLDER NAME</h5>
        <h4>{{ infoCard.name }}</h4>
      </section>

      <section class="date">
        <h5>VALID THRU</h5>
        <h4>{{ infoCard.date }}</h4>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardData: Object,
  },
  computed: {
    vendorOfChoice() {
      let vendorClassName = "";

      if (this.cardData.vendor === "") {
        vendorClassName = "standard";
      }
      if (this.cardData.vendor === "bitcoin") {
        vendorClassName = "bitcoin";
      }
      if (this.cardData.vendor === "ninja") {
        vendorClassName = "ninja";
      }
      if (this.cardData.vendor === "blockchain") {
        vendorClassName = "blockchain";
      }
      if (this.cardData.vendor === "evil") {
        vendorClassName = "evil";
      }
      return vendorClassName;
    },
    infoCard() {
      return this.cardData
    }
  },
  methods: {
    infoVendor() {
      this.cardInfo.index = this.$vnode.key
      this.$emit('cardInfo', this.cardInfo)
    }
  }
    
};
</script>

<style lang="scss" scoped>
#card {
  width: 380px;
  height: 240px;
  background: #d0d0d0;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  font-family: "PT Mono", monospace;
  font-style: normal;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.standard {
    background: #d0d0d0;
  }

  &.bitcoin {
    background: #ffae34;
  }

  &.ninja {
    background: #222222;

    #cardMiddle {
      h3 {
        color: #ffffff;
      }
    }

    #cardBottom {
      .name {
        h5,
        h4 {
          color: #ffffff;
        }
      }

      .date {
        h5,
        h4 {
          color: #ffffff;
        }
      }
    }
  }

  &.blockchain {
    background: #8b58f9;

    #cardMiddle {
      h3 {
        color: #ffffff;
      }
    }

    #cardBottom {
      .name {
        h5,
        h4 {
          color: #ffffff;
        }
      }

      .date {
        h5,
        h4 {
          color: #ffffff;
        }
      }
    }
  }

  &.evil {
    background: #f33355;

    #cardMiddle {
      h3 {
        color: #ffffff;
      }
    }

    #cardBottom {
      .name {
        h5,
        h4 {
          color: #ffffff;
        }
      }

      .date {
        h5,
        h4 {
          color: #ffffff;
        }
      }
    }
  }

  #cardTop {
    display: flex;
    justify-content: space-between;
    width: 380px;
    height: 100px;

    .chipImg {
      margin-left: 1rem;
    }

    .vendorImg {
      margin-right: 1rem;
    }
  }

  #cardMiddle {
    width: 380px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;

    h3 {
      font-size: 29px;
      line-height: 32px;
      letter-spacing: 0.03em;
      color: #000000;
    }
  }

  #cardBottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 380px;
    height: 40px;

    .name {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 190px;
      padding-left: 1rem;
      text-transform: uppercase;

      h5 {
        font-size: 12px;
        line-height: 13px;
        color: rgba(0, 0, 0, 0.8);
        margin: 0;
      }

      h4 {
        margin: 0;
        font-size: 18px;
        line-height: 20px;
        color: #000000;
      }
    }

    .date {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      text-align: right;
      width: 170px;
      padding-right: 1rem;

      h5 {
        font-size: 12px;
        line-height: 13px;
        color: rgba(0, 0, 0, 0.8);
        margin: 0;
      }

      h4 {
        margin: 0;
        font-size: 18px;
        line-height: 20px;
        color: #000000;
      }
    }
  }
}
</style>