import type { GoodsState } from './state';

type GoodsGetters = {
  currency: (state: GoodsState) => GoodsState['currency'];
  goodsWithNewCurrency: (state: GoodsState) => GoodsState['goods'];
  goods: (state: GoodsState) => GoodsState['goods'];
  goodsNames: (state: GoodsState) => GoodsState['names'];
};

export const goodsGetters: GoodsGetters = {
  currency: (state) => state.currency,
  goodsWithNewCurrency: (state) => {
    return state.goods.map((item) => {
      let valueCurrency = Number((item.C * Number(state.currency)).toFixed(2));
      return { ...item, C: valueCurrency };
    });
  },
  goods: (state) => state.goods,
  goodsNames: (state) => state.names,
};
