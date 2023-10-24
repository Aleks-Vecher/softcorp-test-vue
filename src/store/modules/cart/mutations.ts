import type { IGood } from '@/types';
import type { MutationTree } from 'vuex';
import type { ICartItemsState } from './state';
import { CART_ACTION_TYPE } from './actions';

export type CartMutation = {
  [CART_ACTION_TYPE.ADD_CART_ITEM](state: ICartItemsState, payload: IGood): void;
  [CART_ACTION_TYPE.DELETE_CART_ITEM](state: ICartItemsState, payload: string): void;
};

export const cartMuttations: MutationTree<ICartItemsState> & CartMutation = {
  [CART_ACTION_TYPE.ADD_CART_ITEM](state, payload) {
    state.cartItems = [...state.cartItems, payload];
  },
  [CART_ACTION_TYPE.DELETE_CART_ITEM](state, id) {
    state.cartItems = state.cartItems.filter((item) => item.id !== id);
  },
};
