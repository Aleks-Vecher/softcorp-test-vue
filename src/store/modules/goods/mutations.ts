import type { MutationTree } from 'vuex';
import type { GoodsState } from './state';
import type { IGood, IGoodsNames } from '@/types';
import { GOODS_ACTION_TYPE } from './actions';

export type GoodsMutation = {
  [GOODS_ACTION_TYPE.UPDATE_GOODS](state: GoodsState, payload: IGood[]): void;
  [GOODS_ACTION_TYPE.UPDATE_GOODS_NAMES](state: GoodsState, payload: IGoodsNames): void;
  [GOODS_ACTION_TYPE.UPDATE_CURRENCY](state: GoodsState, payload: string): void;
};

export const goodsMutations: MutationTree<GoodsState> & GoodsMutation = {
  [GOODS_ACTION_TYPE.UPDATE_GOODS](state, payload) {
    state.goods = payload;
  },
  [GOODS_ACTION_TYPE.UPDATE_GOODS_NAMES](state, payload) {
    state.names = payload;
  },
  [GOODS_ACTION_TYPE.UPDATE_CURRENCY](state, payload) {
    state.currency = payload;
  },
};
