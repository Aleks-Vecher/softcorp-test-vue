import type { IGood } from '@/types';
import type { GoodsState } from './state';
import { priceCalculation } from '@/utils';

type GoodsGetters = {
  currency: (state: GoodsState) => GoodsState['currency'];
  goodsWithNewCurrency: (state: GoodsState) => GoodsState['goods'];
  goods: (state: GoodsState) => GoodsState['goods'];
  goodsNames: (state: GoodsState) => GoodsState['names'];
  currencyChange: (state: GoodsState) => GoodsState['currencyFluctuation'];
  getGoodById: (state: GoodsState) => (id: string) => IGood | undefined;
};

export const goodsGetters: GoodsGetters = {
  currency: (state) => state.currency,
  goodsWithNewCurrency: (state) => {
    return state.goods.map((item) => {
      let valueCurrency = priceCalculation(item.C, state.currency);
      return { ...item, C: valueCurrency };
    });
  },
  goods: (state) => state.goods,
  goodsNames: (state) => state.names,
  currencyChange: (state) => state.currencyFluctuation,
  getGoodById: (state) => (id) => {
    const goodsItem = state.goods.find((item) => item.id === id);
    return goodsItem;
  },
};
