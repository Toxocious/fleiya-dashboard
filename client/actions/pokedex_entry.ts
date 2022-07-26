import { API_ACTIONS } from '@constants/api_actions';

import * as api from '@api/index';

export const GET_POKEDEX_ENTRIES = () => async (dispatch: any) => {
  try {
    const { data } = await api.GET_ENTRIES();

    dispatch({
      payload: data,
      type: API_ACTIONS.GET_ALL,
    });
  } catch (error) {
    console.log(
      `[! | ACTIONS] An error occurred while getting all pokedex entries.`,
      error
    );
  }
};

export const GET_POKEDEX_ENTRY =
  (pokedex_id: string) => async (dispatch: any) => {
    try {
      const { data } = await api.GET_ENTRY(pokedex_id);

      dispatch({
        payload: data,
        type: API_ACTIONS.GET_ONE,
      });
    } catch (error) {
      console.log(
        `[! | ACTIONS] An error occurred while getting the selected Pokedex entry.`,
        error
      );
    }
  };
