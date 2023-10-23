import type { ActionTree } from 'vuex';
import type { GoodsState } from './state';
import type { IGood } from '@/types';
import type { AugmentedActionContext } from '../../types';
import type { GoodsMutation } from './mutations';
import { goods } from '@/api';

export enum GOODS_ACTION_TYPE {
  UPDATE_GOODS = 'updateGoods',
  UPDATE_GOODS_NAMES = 'updateGoodsNames',
  UPDATE_CURRENCY = 'updateCurrency',
}

type GoodsContext = AugmentedActionContext<GoodsState, GoodsMutation>;
type GoodsActions = {
  loadGoods({ commit }: GoodsContext): Promise<IGood[]>;
  loadGoodsNames({ commit }: GoodsContext): void;
  updateCurrency({ commit }: GoodsContext, payload: string): void;
};

export const goodsActions: ActionTree<GoodsState, GoodsState> & GoodsActions = {
  loadGoods({ commit, state }) {
    return new Promise((resolve, reject) => {
      goods.getAll().then(
        (goods) => {
          const items = goods?.Value?.Goods;
          let itemsWithId = items.map((item) => {
            return { ...item, id: `${item.G}.${item.T}` };
          });
          commit(GOODS_ACTION_TYPE.UPDATE_GOODS, itemsWithId);
          resolve(items);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
  loadGoodsNames({ commit }) {
    return new Promise((resolve, reject) => {
      goods.getAllNames().then(
        (goodsName) => {
          commit(GOODS_ACTION_TYPE.UPDATE_GOODS_NAMES, goodsName);
          resolve(goodsName);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },

  updateCurrency({ commit }, payload) {
    commit(GOODS_ACTION_TYPE.UPDATE_CURRENCY, payload);
  },
};
