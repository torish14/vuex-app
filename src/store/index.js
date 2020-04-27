import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //! 共通データを格納する工場
  state: {
    banana: 100,
    apple: 120,
    totalApple: 0,
    totalBanana: 0,
    tax: 1.08,
    stockApple: true,
    stockBanana: true
  },
  //! state にあるデータを加工
  getters: {
    appleIncludesTax: state => {
      return Math.floor(state.apple * state.tax);
    },
    bananaIncludesTax: state => {
      return Math.floor(state.banana * state.tax);
    },
    totalAppleIncludesTax: state => {
      return Math.floor(state.apple * state.totalApple * state.tax)
    },
    totalBananaIncludesTax: state => {
      return Math.floor(state.banana * state.totalBanana * state.tax)
    }
  },
  //! state の値を変更する配達員
  mutations: {
    incrementApple: state => {
      state.totalApple ++
    },
    incrementBanana: state => {
      state.totalBanana ++
    },
    changeStockApple: state => {
      state.stockApple = false
    },
    changeStockBanana: state => {
      state.stockBanana = false
    }
  },
  //! 非同期処理
  actions: {
    checkStockApple: ({ commit }) => {
      setTimeout(() => {
        commit('changeStockApple')
      }, 5000)
    },
    checkStockBanana: ({ commit }) => {
      setTimeout(() => {
        commit('changeStockBanana')
      }, 7000);
    }
  }
})
