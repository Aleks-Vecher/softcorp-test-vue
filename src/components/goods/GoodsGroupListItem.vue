<template>
  <div>
    <li>
      <span @click.stop="toogleListRow">
        <span ref="indicator">&gt; </span>
        {{ goodsNames[groupNumber]['G'] }}
      </span>
      <div class="hidden">
        <ul v-for="item in value">
          <li>
            <div class="row-good-container">
              <div>{{ goodsNames[groupNumber]['B'][item['T']]['N'] }} ({{ item['P'] }})</div>
              <div class="row-good__item-price">
                <span :style="{ backgroundColor: currencyChange }">&#8381; {{ item['C'] }}</span>
              </div>
              <div class="row-good__item-btn">
                <button @click="addItemToCart(item.id)">Купить</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </div>
</template>
<script lang="ts">
import type { IGood } from '@/types';
import Vue, { type PropType, type VueConstructor } from 'vue';
import { mapGetters } from 'vuex';

export default (Vue as VueConstructor<Vue>).extend({
  name: 'GoodsListItem',
  props: {
    groupNumber: {
      type: String,
    },
    value: Array as PropType<IGood[]>,
  },
  data() {
    return {
      priceColor: '',
    };
  },
  computed: {
    ...mapGetters(['goodsNames', 'currencyChange', 'getGoodById']),
  },
  methods: {
    toogleListRow(e: Event) {
      if ((e.target as HTMLSpanElement).nextElementSibling) {
        (e.target as HTMLSpanElement)?.nextElementSibling?.classList.toggle('hidden');
        if (this.$refs.indicator) {
          if ((e.target as HTMLSpanElement)?.nextElementSibling?.classList.contains('hidden')) {
            (this.$refs.indicator as HTMLSpanElement).innerHTML = '&gt;';
          } else {
            (this.$refs.indicator as HTMLSpanElement).innerHTML = '&or;';
          }
        }
      }
    },
    addItemToCart(id: string) {
      const goodItemId = this.getGoodById(id);
      this.$store.dispatch('addCartItem', goodItemId);
    },
  },
});
</script>
<style scoped>
.hidden {
  display: none;
}

ul {
  list-style-type: none;
}

.row-good-container {
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
}

.row-good__item-price {
  margin: auto 16px auto 0;
}

.row-good__item-btn {
  margin: auto 0;
}
</style>
