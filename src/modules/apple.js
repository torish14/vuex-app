export const apple = {
  namespaced: true,
  state: {
    apple: 200,
    total: 1,
    tax: 1.08,
    stock: true
  },
  getters: {
    appleIncludesTax: state => {
      return state.apple * state.tax
    },
    totalApplesIncludesTax: state => {
      return Math.floor(state.apple * state.total * state.tax)
    }
  },
  mutations: {
    incrementApple: state => {
      state.total++
    },
    changeStock: state => {
      state.stock = false
    }
  },
  actions: {
    checkStock: ({ commit }) => {
      setTimeout(() => {
        commit('changeStock')
      }, 10000)
    }
  }
}
