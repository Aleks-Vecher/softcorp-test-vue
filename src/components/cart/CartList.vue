<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(value, key) in cartItems">
          <CartListItem />
        </tr>
      </tbody>
    </table>
    Общая стоимость &#8381; :  {{ summaryPrice }}
  </div>
</template>
<script lang="ts">
import Vue, { type PropType, type VueConstructor } from 'vue';
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
<style scoped></style>
