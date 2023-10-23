<template>
  <div class="currency-container">
    <label>Курс &#8381; : </label>
    <input :class="{ error: !isValidCurrencyNumber }" v-model="currency" @blur="() => setPrevValideCurrency()" />
    <div>
      <span v-if="!isValidCurrencyNumber">The value should be between 20-80 and number</span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { type VueConstructor } from 'vue';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'CurrencyInput',
  data() {
    return {
      currency: '',
      isValidCurrencyNumber: false,
    };
  },
  created() {
    this.currency = this.randomValue(80, 20);
  },
  methods: {
    setPrevValideCurrency() {
      this.currency = this.$store.state.goods.currency;
    },
    randomValue(min: number, max: number) {
      return (Math.random() * (max - min) + min).toFixed(2);
    },
  },
  watch: {
    currency: function (val: string) {
      let currencyValue = parseFloat(val).toFixed(2);
      if (Number(currencyValue) >= 20 && Number(currencyValue) <= 80) {
        this.isValidCurrencyNumber = true;
        this.$store.dispatch('setCurrencyFluctuation', currencyValue);
        this.$store.dispatch('updateCurrency', currencyValue);
      } else {
        this.isValidCurrencyNumber = false;
      }
    },
  },
});
</script>
<style scoped>
.error {
  border: 2px solid red;
}
</style>
