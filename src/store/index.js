import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //? 共通のデータを格納する場所
  state: {
    apple: 200,
    total: 1,
    tax: 1.08,
    stock: true
  },
  //? state にあるデータを別のデータとして処理・算出する
  getters: {
    appleIncludesTax: state => {
      return state.apple * state.tax
    },
    totalApplesIncludesTax: state => {
      return Math.floor(state.apple * state.total * state.tax)
    }
  },
  //? state の値を変更する（同期処理のみ）
  mutations: {
    incrementApple: state => {
      state.total++
    },
    changeStock: state => {
      state.stock = false
    }
  },
  //? 非同期処理を行う
  actions: {
    checkStock: ({ commit }) => {
      setTimeout(() => {
        commit('changeStock')
      }, 10000)
    }
  },
  //? store を分割して整理する
  modules: {
  }
})
