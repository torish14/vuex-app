<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>りんごの値段は、ひとつ{{ appleIncludesTax }}円（税込）ですニャン</p>
    <p>あなたはリンゴを{{ total }}つ、カゴに入れましたワン</p>
    <p>りんごの合計値段は、{{ totalApplesIncludesTax }}円（税込）ですニャン</p>
    <button v-if="stock" @click="addApple">リンゴをカゴに入れるゾウ</button>
    <p v-else>りんごは売り切れましたニャン・・・</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'total',
      'soldout',
      'stock'
    ]),
    ...mapGetters([
      'appleIncludesTax',
      'totalApplesIncludesTax'
    ])
  },
  mounted() {
    this.$store.dispatch('checkStock')
  },
  methods: {
    ...mapMutations([
      'incrementApple'
    ]),
    addApple() {
      this.incrementApple()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
