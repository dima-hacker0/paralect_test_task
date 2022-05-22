import { ADD_USER_INFORMATION, CHANGE_INPUT_VALUE } from "../types";

const initialState = {
  inputValue: "",
  repositories: null,
  user: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case ADD_USER_INFORMATION: {
    }
    default:
      return state;
  }
};

export default mainReducer;
