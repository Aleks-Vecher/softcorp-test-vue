<template>
  <div>
    <ul v-for="(value, key) in goodsItems">
      <GoodsGroupListItem :value="value" :groupNumber="key" />
    </ul>
  </div>
</template>
<script lang="ts">
import GoodsGroupListItem from '@/components/goods/GoodsGroupListItem.vue';
import type { IGood } from '@/types';
import Vue, { type VueConstructor } from 'vue';
import { mapGetters } from 'vuex';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'GoodsGroupList',
  components: {
    GoodsGroupListItem,
  },
  computed: {
    ...mapGetters(['goodsWithNewCurrency']),
    goodsItems() {
      let newgoodsObj: { [index: string]: IGood[] } = {};
      this.goodsWithNewCurrency.forEach((item: IGood) => {
        if (newgoodsObj[item.G]) {
          newgoodsObj[item.G] = [...newgoodsObj[item.G], item];
        } else {
          newgoodsObj[item.G] = [item];
        }
      });
      return newgoodsObj;
    },
  },
});
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>
