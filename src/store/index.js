import Vue from 'vue'
import Vuex from 'vuex'
import { apple } from '../modules/apple'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apple: apple
  }
})
