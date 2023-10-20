import { goods } from '@/api';
import type { ActionTree, MutationTree } from 'vuex';
import type { AugmentedActionContext } from '@/store/types';
import type { IGoodsNames, IGood } from '@/types';

enum GOODS_ACTION_TYPE {
  UPDATE_GOODS = 'updateGoods',
  UPDATE_GOODS_NAMES = 'updateGoodsNames',
}

interface GoodsState {
  goods: IGood[];
  names: IGoodsNames;
  currency: string;
}

type GoodsMutation = {
  [GOODS_ACTION_TYPE.UPDATE_GOODS](state: GoodsState, payload: IGood[]): void;
  [GOODS_ACTION_TYPE.UPDATE_GOODS_NAMES](state: GoodsState, payload: IGoodsNames): void;
};

type GoodsContext = AugmentedActionContext<GoodsState, GoodsMutation>;
type GoodsActions = {
  loadGoods({ commit }: GoodsContext): Promise<IGood[]>;
  loadGoodsNames({ commit }: GoodsContext): void;
};

const goodsState: GoodsState = {
  goods: [],
  names: {},
  currency: '',
};

const getters = {};

const actions: ActionTree<GoodsState, GoodsState> & GoodsActions = {
  loadGoods({ commit }) {
    return new Promise((resolve, reject) => {
      goods.getAll().then(
        (goods) => {
          const items = goods?.Value?.Goods;
          commit(GOODS_ACTION_TYPE.UPDATE_GOODS, items);
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
};

const mutations: MutationTree<GoodsState> & GoodsMutation = {
  [GOODS_ACTION_TYPE.UPDATE_GOODS](state, payload) {
    state.goods = payload;
  },
  [GOODS_ACTION_TYPE.UPDATE_GOODS_NAMES](state, payload) {
    state.names = payload;
  },
};

const goodsModule = {
  goodsState,
  getters,
  actions,
  mutations,
};

export default goodsModule;
