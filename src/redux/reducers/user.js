import { GET_USER } from "../actions/types";
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
