import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    cards: [],
    index: 0,
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
      newCard.key = state.index;
      state.cards.push(newCard)
      state.index++;
    },
    chosenCard(state, choice) {
      state.card = choice
    }
  },
  actions: {
  },
  getters: {
  }
})
