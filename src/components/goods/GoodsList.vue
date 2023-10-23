<template>
  <div>
    GoodsList
    <div>goodsWithNewCurrency: {{ goodsWithNewCurrency }}</div>
    <div>currency: {{ currency }}</div>
  </div>
</template>
<script lang="ts">
import Vue, { type VueConstructor } from 'vue';
import { mapGetters, mapState } from 'vuex';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'GoodsList',

  computed: {
    ...mapGetters(['currency', 'goods', 'goodsName', 'goodsWithNewCurrency']),
  },
  methods: {},
});
</script>
<style scoped></style>
