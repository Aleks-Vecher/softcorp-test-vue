<template>
  <div id="app">
    <header>
      <div class="wrapper"></div>
    </header>
    <main>
      <GoodsList />
      <CartList />
    </main>
    <pre>{{ goods }}</pre>
  </div>
</template>

<script lang="ts">
import CartList from '@/components/cart/CartList.vue';
import GoodsList from '@/components/goods/GoodsList.vue';
import Vue, { type PropType, type VueConstructor } from 'vue';
import { goods } from './api';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'App',
  components: {
    CartList,
    GoodsList,
  },
  data() {
    return {
      goods: {},
    };
  },
  created() {
    this.loadGoods();
  },
  methods: {
    async loadGoods() {
      const data = await goods.getAll();
      this.goods = data;
    },
  },
});
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
