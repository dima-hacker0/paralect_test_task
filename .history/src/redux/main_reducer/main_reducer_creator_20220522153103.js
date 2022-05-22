import {
  ADD_REPOSITORIES_INFORMATION,
  ADD_USER_INFORMATION,
  CHANGE_INPUT_VALUE,
  CHANGE_LOADING_STATUS,
} from "../types";

export const changeInputValueCreator = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: value,
  };
};

export const addUserInformationCreator = (userInformation) => {
  return {
    type: ADD_USER_INFORMATION,
    payload: userInformation,
  };
};

export const addRepositoriesInformationCreator = (repositories) => {
  return {
    type: ADD_REPOSITORIES_INFORMATION,
    payload: repositories,
  };
};

export const changeLoadingStatusCreator = (page, status) => {
  return {
    type: CHANGE_LOADING_STATUS,
    payload: { page: page, status: status },
  };
};
