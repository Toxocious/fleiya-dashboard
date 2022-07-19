import { API_ACTIONS } from '@constants/api_actions';

interface iAction {
  type: string;
  payload: any;
}

export const POKEDEX_ENTRY = (Pokedex_Entry = [], action: iAction) => {
  switch (action.type) {
    // @ts-ignore
    case API_ACTIONS.GET_ALL:
      return action;

    default:
      return Pokedex_Entry;
  }
};
