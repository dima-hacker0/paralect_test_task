import {
  ADD_REPOSITORIES_INFORMATION,
  ADD_USER_INFORMATION,
  CHANGE_INPUT_VALUE,
} from "../types";

const initialState = {
  inputValue: "",
  repositories: null,
  user: null,
  loadingStatus: "noRequest",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case ADD_USER_INFORMATION:
      return {
        ...state,
        user: action.payload,
      };

    case ADD_REPOSITORIES_INFORMATION:
      return {
        ...state,
        repositories: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
