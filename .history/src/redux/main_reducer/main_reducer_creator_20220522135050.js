import { CHANGE_INPUT_VALUE } from "../types";

export const changeInputValueCreator = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: value,
  };
};

export const addUSerInformationCreator = (userInformation) => {};
