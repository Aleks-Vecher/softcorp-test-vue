<template>
  <div id="app">
    <main class="container">
      <div class="main__inner">
        <div class="goods-container">
          <CurrencyInput />
          <div v-if="isLoading">Loading...</div>
          <GoodsGroupList />
        </div>
        <div class="cart-container">
          <CartList />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import CartList from '@/components/cart/CartList.vue';
import GoodsGroupList from '@/components/goods/GoodsGroupList.vue';
import CurrencyInput from '@/components/CurrencyInput.vue';
import Vue, { type VueConstructor } from 'vue';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'App',
  components: {
    CartList,
    GoodsGroupList,
    CurrencyInput,
  },
  data() {
    return {
      isLoading: false,
      intervalId: 0 as number,
    };
  },
  created() {
    this.isLoading = true;
    this.fetchGoodsName();
    this.fetchGoodsWithInterval();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    fetchGoods() {
      this.$store.dispatch('loadGoods');
    },
    fetchGoodsWithInterval() {
      //TODO change delay to 15000
      this.intervalId = setInterval(() => this.$store.dispatch('loadGoods').then(() => (this.isLoading = false)), 5000);
    },
    fetchGoodsName() {
      this.$store.dispatch('loadGoodsNames');
    },
  },
});
</script>

<style scoped>
header {
  line-height: 1.5;
}

.container {
  padding: 0 1rem;
}
.main__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
