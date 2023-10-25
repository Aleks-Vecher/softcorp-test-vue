<template>
  <div>
    <table>
      <thead>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
      </thead>
      <tbody>
        <tr v-for="item in cartItems">
          <CartListItem :item="item" :cartItemId="item.id" />
        </tr>
      </tbody>
    </table>
    <div>
      <div>Общая стоимость :</div>
      <div class="text_bold">&#8381; {{ summaryPrice }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { type VueConstructor } from 'vue';
import { mapGetters } from 'vuex';
import CartListItem from '@/components/cart/CartListItem.vue';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'CartList',
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(['cartItems', 'summaryPrice']),
  },
});
</script>
<style scoped>
table {
  width: 100%;
}

.text_bold {
  font-weight: 600;
}
</style>
