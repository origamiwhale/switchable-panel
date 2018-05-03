import {
  CHANGE_NAME,
  CHANGE_SURNAME,
  SAVE_PRISTINE,
  REVERT_PRISTINE
} from "./actions";

const initalState = {
  name: "John",
  surname: "Doe",
  pristineData: {}
};

function appReducer(state = initalState, action) {
  const newState = { ...state };
  switch (action.type) {
    case CHANGE_NAME:
      newState.name = action.name;
      break;
    case CHANGE_SURNAME:
      newState.surname = action.surname;
      break;
    case SAVE_PRISTINE:
      newState.pristineData = {
        name: newState.name,
        surname: newState.surname
      };
      break;
    case REVERT_PRISTINE:
      newState.name = newState.pristineData.name;
      newState.surname = newState.pristineData.surname;
      break;
  }
  return newState;
}

export default appReducer;
