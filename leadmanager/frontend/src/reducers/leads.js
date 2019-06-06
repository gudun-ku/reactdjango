import { GET_LEADS } from "../action/types.js";
import { defaultCipherList } from "constants";

const initialState = {
  sometnhing: "text",
  leads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      };
    default:
      return State;
  }
}
