# vuex-app

## vuexについて学ぼう！
- state
  - 共通のデータを格納する場所
- getters
  - state にあるデータを別のデータとして処理・算出する
- mutations
  - state の値を変更する
- actions
  - 非同期処理を行う
- modules
  - store を分割して整理する

### state からデータを取得
```
this.$store.state.〇〇
...mapState(['〇〇'])
```

### getters からデータを取得
```
this.$store.getters.〇〇
...mapGetters(['〇〇'])
```

### mutations に登録されているメソッドを実行
```
this.$store.commit('〇〇')
```

### actions に登録されているメソッドを実行
```
this.$store.dispatch('〇〇')
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
