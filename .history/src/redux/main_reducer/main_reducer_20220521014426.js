import { CHANGE_INPUT_VALUE } from "./types";

const initialState = {
  inputValue: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      break;
  }
};
