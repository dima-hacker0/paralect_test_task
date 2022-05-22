import {
  ADD_REPOSITORIES_INFORMATION,
  ADD_USER_INFORMATION,
  CHANGE_INPUT_VALUE,
  CHANGE_LOADING_STATUS,
} from "../types";

const initialState = {
  inputValue: "",
  repositories: null,
  user: null,
  loadingStatus: {
    user: "noRequest",
    repositories: "noRequest",
  },
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
    case CHANGE_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: {
          ...state.loadingStatus,
          [action.payload.page]: action.payload.status,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
