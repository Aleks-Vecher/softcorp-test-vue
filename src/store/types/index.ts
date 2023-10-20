import type { ActionContext, MutationTree } from 'vuex';

export type AugmentedActionContext<State, Mutations extends MutationTree<State>> = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;
