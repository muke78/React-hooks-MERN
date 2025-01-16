import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};


/**
 * No se debe de llmar los localStorage desde los reducer por ser funciones puras
 * llamar axios o fetch api
 */
