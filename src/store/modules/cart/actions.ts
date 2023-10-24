import type { IGood } from '@/types';
import type { AugmentedActionContext } from '../../types';
import type { ICartItemsState } from './state';
import type { CartMutation } from './mutations';
import type { ActionTree } from 'vuex';

export enum CART_ACTION_TYPE {
  ADD_CART_ITEM = 'addCartItem',
  DELETE_CART_ITEM = 'deleteCartItem',
}

type CartContext = AugmentedActionContext<ICartItemsState, CartMutation>;
type CartActions = {
  addCartItem({ commit }: CartContext, payload: IGood): void;
};

export const cartActions: ActionTree<ICartItemsState, ICartItemsState> & CartActions = {
  addCartItem({ commit }, payload) {
    commit(CART_ACTION_TYPE.ADD_CART_ITEM, payload);
  },
};
