import { cartActions } from './actions';
import { cartGetters } from './getters';
import { cartMuttations } from './mutations';
import { generateInitialCartState } from './state';

const cartModule = {
  state: generateInitialCartState,
  getters: cartGetters,
  actions: cartActions,
  mutations: cartMuttations,
};

export default cartModule;
