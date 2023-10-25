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
          <Timer :count="timeLeft" />
          <button @click="reFetchGoodsWithInterval">Обновить</button>
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
import Timer from '@/components/Timer.vue';
import Vue, { type VueConstructor } from 'vue';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'App',
  components: {
    CartList,
    GoodsGroupList,
    CurrencyInput,
    Timer,
  },
  data() {
    return {
      isLoading: false,
      intervalId: 0 as number,
      timerIntervalId: 0 as number,
      timeLimit: 15,
      timePassed: 0,
    };
  },
  created() {
    this.isLoading = true;
    this.fetchGoodsName();
    this.startTimer();
    this.fetchGoods();
    this.fetchGoodsWithInterval();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
    clearInterval(this.timerIntervalId);
  },
  computed: {
    timeLeft() {
      return this.timeLimit - this.timePassed;
    },
  },
  methods: {
    fetchGoods() {
      this.$store.dispatch('loadGoods').then(() => (this.isLoading = false));
    },
    fetchGoodsWithInterval() {
      this.intervalId = setInterval(() => {
        this.timePassed = 0;
        this.$store.dispatch('loadGoods');
      }, 15000);
    },
    fetchGoodsName() {
      this.$store.dispatch('loadGoodsNames');
    },
    startTimer() {
      this.timerIntervalId = setInterval(() => (this.timePassed += 1), 1000);
    },
    reFetchGoodsWithInterval() {
      clearInterval(this.intervalId);
      clearInterval(this.timerIntervalId);
      this.timePassed = 0;
      this.startTimer();
      this.fetchGoods();
      this.fetchGoodsWithInterval();
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
