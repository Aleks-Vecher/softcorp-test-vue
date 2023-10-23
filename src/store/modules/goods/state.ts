import type { IGood, IGoodsNames } from '@/types';

export interface GoodsState {
  goods: IGood[];
  names: IGoodsNames;
  currency: string;
}

export function generateInitialGoodsState(): GoodsState {
  return {
    goods: [],
    names: {},
    currency: '',
  };
}
