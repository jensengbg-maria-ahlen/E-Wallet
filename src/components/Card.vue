<template>
  <article id="card" :class="headline">
    <section id="cardTop">
      <img class="chipImg" :src="darkChipImg" alt="chip">
      <img class="vendorImg" :src="bitcoinImg" alt="vendor">
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
import bitcoinSVG from '@/assets/vendor-bitcoin.svg';
import ninjaSVG from '@/assets/vendor-ninja.svg';
import blockchainSVG from '@/assets/vendor-blockchain.svg';
import evilSVG from '@/assets/vendor-evil.svg';
import darkChipSVG from '@/assets/chip-dark.svg';
import lightChipSVG from '@/assets/chip-light.svg';

export default {
  name: "Card",
  props: {
    cardInfo: Object,
  },
  data() {
    return {
      bitcoinImg: bitcoinSVG,
      ninjaImg: ninjaSVG,
      blockchainImg: blockchainSVG,
      evilImg: evilSVG,
      darkChipImg: darkChipSVG,
      lightChipImg: lightChipSVG,
    }
  },
  computed: {
      headline() {
        let className = ''

        if(this.cardInfo.vendor === "bitcoin") {
          className = "bitcoin"
        }
        if(this.cardInfo.vendor === "ninja") {
          className = "ninja"
        }
        if(this.cardInfo.vendor === "blockchain") {
          className = "blockchain"
        }
        if(this.cardInfo.vendor === "evil") {
          className = "evil"
        }

        return className
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

  &.bitcoin {
    background: #FFAE34;
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
        h5, h4 {
          color: #ffffff;
        }
      }

      .date {
        h5, h4 {
          color: #ffffff;
        }
      }
    }
  }

  &.blockchain {
    background: #8B58F9;

    #cardMiddle {

      h3 {
        color: #ffffff;
      }
    }
    
    #cardBottom {

      .name {
        h5, h4 {
          color: #ffffff;
        }
      }

      .date {
        h5, h4 {
          color: #ffffff;
        }
      }
    }
  }

  &.evil {
    background: #F33355;

    #cardMiddle {

      h3 {
        color: #ffffff;
      }
    }
    
    #cardBottom {

      .name {
        h5, h4 {
          color: #ffffff;
        }
      }

      .date {
        h5, h4 {
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
      margin-top: -3rem;
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