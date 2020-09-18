import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    card: {
      cardNumber: "",
      name: "",
      date: "",
      ccv: "",
      vendor: "",
    }
  },
  mutations: {
    addCard(state, newCard) {
      state.cards.push(newCard)
    },
    showCard(state, cardOfChoice) {
      state.card.push(cardOfChoice)
    }
  },
  actions: {
  },
  getters: {
    cardChoice(state) {
      return (index) => {
        return state.cards.filter(card => card.key === index)[0]
      }
    }
  }
})
