<template>
  <div>
    <td>{{ groupName }}</td>
    <td>{{ goodName }}</td>
    <td>{{ amountGoods }}</td>
    <td>
      <span :style="{ backgroundColor: currencyChange }">{{ priceGood }}</span>
    </td>
    <td>
      <button @click="deleteCartItem(cartItemId)">Удалить</button>
    </td>
  </div>
</template>
<script lang="ts">
import Vue, { type PropType, type VueConstructor } from 'vue';
import type { IGood } from '@/types';
import { mapGetters } from 'vuex';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'CartListItem',
  props: {
    item: Object as PropType<IGood>,
    cartItemId: {
      type: String,
    },
  },
  computed: {
    ...mapGetters(['goodsNames', 'currencyChange']),
    groupName() {
      return this.goodsNames[this.item['G']]['G'];
    },
    goodName() {
      const { G, T } = this.item;
      return this.goodsNames[G]['B'][T]['N'];
    },
    amountGoods() {
      return this.item.amount;
    },
    priceGood() {
      return this.item['C'];
    },
  },
  methods: {
    deleteCartItem(id: string) {
      this.$store.commit('deleteCartItem', id);
    },
  },
});
</script>
<style scoped>
tbody td:nth-child(1) {
  width: 15%;
}

tbody td:nth-child(2) {
  width: 65%;
}

tbody td:nth-child(3) {
  width: 10%;
}

tbody td:nth-child(4) {
  width: 10%;
}
</style>
