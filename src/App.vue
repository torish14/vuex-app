<template>
  <div id="app">
    <p>バナナは、一本{{ banana }}円で、りんごは{{ apple }}円だよ〜</p>
    <p>安いよ！買ってくかい？今ならセットで{{ banana + apple - 20 }}円でだよ〜！</p>
    <p>あ、すまんね💦税込みだと、バナナは{{ bananaIncludesTax }}円で、りんごは{{ appleIncludesTax }}円です。</p>
    <p>お客さんのかごにはいまバナナが{{ totalBanana }}個あって、りんごが{{ totalApple }}個あるね。</p>
    <p>かごの中の果物の合計金額は、{{ totalAppleIncludesTax + totalBananaIncludesTax }}円です！</p>

    <button v-if="stockBanana"
    @click="addBanana">バナナをかごに入れる</button>
    <p v-else>バナナは売り切れちゃったよ💦</p>

    <button v-if="stockApple" @click="addApple">りんごをかごに入れる</button>
    <p v-else>りんごは売り切れちゃったよ💦</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'apple',
      'banana',
      'totalApple',
      'totalBanana',
      'stockBanana',
      'stockApple',
      'soldout'
    ]),
    ...mapGetters([
      'appleIncludesTax',
      'bananaIncludesTax',
      'totalAppleIncludesTax',
      'totalBananaIncludesTax'
    ]),
    // appleIncludesTax() {
    //   return Math.ceil( this.$store.getters.appleIncludesTax )
    // },
    // bananaIncludesTax() {
    //   return Math.ceil( this.$store.getters.bananaIncludesTax )
    // },

    // apple() {
    //   return this.$store.state.apple
    // },
    // banana() {
    //   return this.$store.state.banana
    // }
  },
  mounted() {
    this.checkStockApple()
    this.checkStockBanana()
  },
  methods: {
    ...mapMutations([
      'incrementApple',
      'incrementBanana'
    ]),
    ...mapActions([
      'checkStockApple',
      'checkStockBanana'
    ]),
    addApple() {
      this.incrementApple()
    },
    addBanana() {
      this.incrementBanana()
    }
  }
}
</script>

<style>

</style>
