import { ADD_USER_INFORMATION, CHANGE_INPUT_VALUE } from "../types";

export const changeInputValueCreator = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: value,
  };
};

export const addUSerInformationCreator = (userInformation) => {
  return {
    type: ADD_USER_INFORMATION,
    payload: userInformation,
  };
};

export const addRepositoriesInformationCreator = (repositories) => {
  return {
    type: ADD_USER_INFORMATION,
    payload: repositories,
  };
};
