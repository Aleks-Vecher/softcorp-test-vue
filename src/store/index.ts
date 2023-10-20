import Vuex from 'vuex';
import Vue from 'vue';
import goodsModule from './modules/goods';
import cartModule from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    goodsModule,
    cartModule,
  },
});
