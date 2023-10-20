<template>
  <div id="app">
    <header>
      <div class="wrapper"></div>
    </header>
    <main>
      <div v-if="isLoading">Loading...</div>
      <GoodsList />
      <CartList />
    </main>
  </div>
</template>

<script lang="ts">
import CartList from '@/components/cart/CartList.vue';
import GoodsList from '@/components/goods/GoodsList.vue';
import Vue, { type VueConstructor } from 'vue';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'App',
  components: {
    CartList,
    GoodsList,
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
    this.isLoading = false;
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
      this.intervalId = setInterval(() => this.$store.dispatch('loadGoods'), 5000);
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
