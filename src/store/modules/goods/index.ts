import { goodsActions } from "./actions"
import { goodsGetters } from "./getters"
import { goodsMutations } from "./mutations"
import { generateInitialGoodsState } from "./state"

export const goodsModule = {
    state: generateInitialGoodsState,
    getters: goodsGetters,
    mutations: goodsMutations,
    actions: goodsActions
}