export interface IGood {
  B: boolean;
  C: number;
  CV: null;
  G: number;
  P: number;
  Pl: null;
  T: number;
}

export interface IGoods {
  Error: string;
  Id: number;
  Success: boolean;
  Value: {
    Goods: IGood[];
  };
}

export interface IGoodsNames {
  [key: string]: {
    G: string;
    B: {
      [key: string]: {
        N: string;
      };
    };
  };
}
